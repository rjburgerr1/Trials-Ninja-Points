
import easyocr
import numpy as np
import re
from flask_restful import Api, Resource, reqparse

class LeaderboardReader(Resource):
  def get(self):
    reader = easyocr.Reader(['en'])
	# result = reader.readtext('inhuman-leaderboard.jpg', detail=0)
	# result = reader.readtext('luscious-leaderboard.jpg', detail=0)
    result = reader.readtext("Screenshot_5.png",batch_size=2, detail=0, decoder="greedy" )

    print(result)
    return result;




# resultTrunc = result


# # insert 0 faults for a run since the easyocr model doesn't pick up 0 
# # fault runs for the base trials fusion font
# for i in range(0, len(resultTrunc)):
#     if (re.search( "([0-2][0-9][:][0-5][0-9][.][0-9][0-9][0-9])",resultTrunc[i])):
#         if not (resultTrunc[i-1].isdigit()):
#             resultTrunc.insert(i, "0")
      
# # Before rehaping the array, make sure each run has an associated 'rank'.
# # The rank itself does not matter, so we can just insert 'rank' as a placeholder
# for i in range(0, len(resultTrunc)):
#     if (re.search( "([0-2][0-9][:][0-5][0-9][.][0-9][0-9][0-9])",resultTrunc[i])):
#         if not (resultTrunc[i+1].isdigit()):
#             resultTrunc.insert(i+1,"rank")

# print(resultTrunc)


# remainder = len(resultTrunc) % 4



# for i in range(0, 4-remainder):
#     resultTrunc.append("-")
 

# runs = np.reshape(resultTrunc, (-1, 4))
# print(runs)


# trackName = runs[0, 0]
# trackName = trackName.replace('CLASSEMENT', '')
# trackName = trackName.replace('LEADERBOARD','')
# trackName = trackName.strip()

# print(trackName)


# runTuples = []

# for i in range(0, len(resultTrunc)):
#     if (re.search( "([0-2][0-9][:|.][0-5][0-9][.][0-9][0-9][0-9])",resultTrunc[i])):
#         runTuples.append(resultTrunc[i])
#         runTuples.append(resultTrunc[i-1])

# runTuples = np.reshape(runTuples, (-1, 2))

# print(runTuples)


