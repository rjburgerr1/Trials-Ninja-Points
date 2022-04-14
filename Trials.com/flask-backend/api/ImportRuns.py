import requests
import json
import re
import numpy as np
import pandas as pd
import time
from flask_restful import Api, Resource, reqparse

class ImportRuns(Resource):
	def get(self):
		result = scrapeBot(self)
		return result

def scrapeBot( self):
	channelId =500030071818551317 # Ninja Reporter channel id for scanning reporter bot msgs
	
	msgRegex = r'(?:[[]\d+[]]\s\")('+re.escape(user)+r')(?:\".*)' # Regex to identify newly submitted run announcements in the ninja-reporter channel
	runRegex = r"(?:[0-2][0-9][:][0-5][0-9][.][0-9][0-9][0-9])(?:.+?)([0-2][0-9][:][0-5][0-9][.][0-9][0-9][0-9])(?:\s+(?:and|&)\s+)(\d*)(?:.+?\")(.+?)(?:\"\s+by\s+\")(.+?)(?:\"\s.*)|(zero)(?:.+\")(.+)(?:\"\s+by\s+\")(.+?)(?:\"\s.+?)([0-2][0-9][:][0-5][0-9][.][0-9][0-9][0-9])|(?:.+\")(.+)(?:\"\s+by\s+\")(.+?)(?:\"\s.*?)([0-2][0-9][:][0-5][0-9][.][0-9][0-9][0-9])(?:\s+and\s+)(\d*)"
	

	parser = reqparse.RequestParser()
	parser.add_argument('user', type=str) # Add discord user to scan msgs from
	args = parser.parse_args()
	user = args.user

	headers = {'authorization': 'mfa.vr2dwU6F7ew5urnOw2jxF0aq_flA-s0wAQR19VoxvPM_sVYtXjzTnu4plQRzHn0c8ZrperrOY73km-6K4cGZ'}

	# Send first request to base rolling requests on
	r = requests.get(f"https://discord.com/api/v9/channels/{channelId}/messages?limit=100", headers=headers )

	msgObj = json.loads(r.text) # JSONify the text response

	offsetMsgId = msgObj[len(msgObj)-1]["id"] # Earliest message in returned message list to offset next request by

	runs = []
	
	while True:
		r = requests.get(f"https://discord.com/api/v9/channels/{channelId}/messages?limit=100&before={offsetMsgId}", headers=headers )
		msgObj = json.loads(r.text)

		if (len(msgObj) == 0): 
			break

		# msgObj = {'global': False, 'message': 'The resource is being rate limited.', 'retry_after': 0.656}

		for attempt in range(10):
			try:
				print(attempt)
				for value in msgObj:
					matches = re.search(msgRegex, value['content'])
					if matches:
						if (user == matches.group(1)):
							match = re.search(runRegex, value["content"].strip(), re.DOTALL)
							if match:
								for groupNum in range(1, len(match.groups())+1):
									if (not match.group(groupNum) == None):
										runs.append(match.group(groupNum))

				offsetMsgId = msgObj[len(msgObj)-1]["id"] # Earliest message in returned message list to offset next request by
			except:
				time.sleep(msgObj["retry_after"]+0.01)
				continue
			else:
				break
		else:
			break

	# Reshape array in 4 by x shape
	runs = np.reshape(runs, (-1, 4))
	jsonResult = pd.DataFrame(runs).to_json(orient='split')

	return jsonResult

			

	

	
	

		
					
	
		
 
