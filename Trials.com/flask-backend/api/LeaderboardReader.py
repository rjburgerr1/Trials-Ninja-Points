
from argparse import FileType
import os
import easyocr
import numpy as np
import re
import pandas as pd
from flask_restful import Api, Resource, reqparse
import matplotlib.image as mpimg
import boto3
import tempfile
from io import BytesIO

# Use this if you need to debug easyocr. This will plot bounding boxes on the image 
# being scanned, making for easier deciphering of OCR results 
# from flask import request
# import cv2
# import matplotlib.pyplot as plt

AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")

class LeaderboardReader(Resource):
  def get(self):
    result = scanLB(self)
    return result


# Scan a leaderboard screen. Which contains a user's run, track name, BUT not the track creator
def scanLB(self):
    parser = reqparse.RequestParser()
    parser.add_argument('fileURL', type=str)
    args = parser.parse_args()

    #fileURL needs to split into just the portion with the s3 object key
    s3ObjKey = args.fileURL.split("https://trialsnp-photos.s3.amazonaws.com/")[1]

    s3 = boto3.client('s3', region_name='us-east-1', aws_access_key_id=AWS_ACCESS_KEY_ID,aws_secret_access_key=AWS_SECRET_ACCESS_KEY)
    s3_response_object = s3.get_object(Bucket="trialsnp-photos", Key=s3ObjKey)
    imgBytes = s3_response_object['Body'].read()

    reader = easyocr.Reader(['en'])
    result = reader.readtext(imgBytes,detail=0, decoder="greedy",text_threshold=0.5,low_text=0.2 )
    
    # insert 0 faults for a run since the easyocr model doesn't pick up 0 
    # fault runs for the base trials fusion font
    for i in range(0, len(result)):
        if (re.search( "([0-2][0-9][:][0-5][0-9][.][0-9][0-9][0-9])",result[i])):
            if not (result[i-1].isdigit()):
                result.insert(i, "0")
          
    # Before reshaping the array, make sure each run has an associated 'rank'.
    # The rank itself does not matter, so we can just insert 'rank' as a placeholder
    for i in range(0, len(result)):
        if (re.search( "([0-2][0-9][:][0-5][0-9][.][0-9][0-9][0-9])",result[i])):
            if not (result[i+1].isdigit()):
                result.insert(i+1,"rank")

    # THIS MAY NOT BE NEEDED
    # Shaping an array into a matrix requires the size of the array to have the 
    # matrix factor be a factor/multiple. Our matrixes are 4 by x
    # 23 must be divisible by 4. So we add onto the end of the array to fill the empty space
    remainder = len(result) % 4

    for i in range(0, 4-remainder):
        result.append("-")
    
    # Reshape array in 4 by x shape
    runs = np.reshape(result, (-1, 4))
   
    trackName = runs[0, 0]
    # In case these strings might appear alongside a track name, remove them
    trackName = trackName.replace('CLASSEMENT', '') 
    trackName = trackName.replace('LEADERBOARD','')
    trackName = trackName.strip()
   
    # Search the matrix for runs by only searching for time within.
    runTuples = []
    for i in range(0, len(result)):
      if (re.search("([0-2][0-9][:|.][0-5][0-9][.][0-9][0-9][0-9])",result[i])):
        runTuples.append(result[i])
        runTuples.append(result[i-1])

    runMatrix = np.reshape(runTuples, (-1, 2))
    # Convert resulting array of runs into json format for request parsing on frontend
    jsonRuns = pd.DataFrame(runMatrix).to_json(orient='split')
    result = [jsonRuns, trackName]

    # IF THE RESULTING RUNS DON'T FIT [time, faults, time, faults...] pattern, 
    # then the image might be outside of the leaderboard ("select track" screen). Try our other image scanning method
    for i in range(0, len(runTuples), 2):
      if (not runTuples[i+1].isdigit() or not re.search("([0-2][0-9][:|.][0-5][0-9][.][0-9][0-9][0-9])",runTuples[i])):
        result = scanInfo(imgBytes)
        break
    
    return result


# Scan the "select track" screen. Which contains a user's run, track name, and track creator
def scanInfo(fileObj):
    
  reader = easyocr.Reader(['en'])
  result = reader.readtext(fileObj, detail=0,decoder="greedy", text_threshold=0.3,low_text=0.1) 

  for i in range(0, len(result)):
    if (result[i].strip() == "Track Creator"):
      creator = (result[i+1])
      break;


  for i in range(0, len(result)):
    if (result[i].strip() == "TRIALS"):
      trackName = (result[i-1])
      break;


  # Replace a period in the times with a colon if it got mistaken in the minutes:seconds portion
  for i in range(0, len(result)):
    if (re.search("([0-2][0-9][:|.][0-5][0-9][.][0-9][0-9][0-9])",result[i].strip())):
      if (re.search("([0-2][0-9][.])",result[i].strip())):
        result[i] = result[i][:3].replace(".",":") + result[i][3:]

  # Find all runs by searching for times
  runTuples = []
  for i in range(0, len(result)):
    match = re.search( "([0-2][0-9][:|.][0-5][0-9][.][0-9][0-9][0-9])",result[i])
    if match:
      if (match.group() == result[i].strip()):
        runTuples.append(match.group())
        runTuples.append(result[i-1])

  runTuples = np.reshape(runTuples, (-1, 2))
  # Convert resulting array of runs into json format for request parsing on frontend
  jsonTuples = pd.DataFrame(runTuples).to_json(orient='split')
  result = [jsonTuples, trackName, creator]

  return result


# Use this if you want to debug bounding boxes, 
# this will plot all easyocr read text over top the original image


#image = cv2.imread("Screenshot_6.png")
# for (bbox, text, prob) in result: 
# 	# unpack the bounding box
# 	(tl, tr, br, bl) = bbox
# 	tl = (int(tl[0]), int(tl[1]))
# 	tr = (int(tr[0]), int(tr[1]))
# 	br = (int(br[0]), int(br[1]))
# 	bl = (int(bl[0]), int(bl[1]))
# 	cv2.rectangle(image, tl, br, (0, 255, 0), 2)
# 	cv2.putText(image, text, (tl[0], tl[1] - 10),
# 	cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 0, 0), 2)
# plt.rcParams['figure.figsize'] = (16,16)
# plt.imshow(image)
# plt.show()