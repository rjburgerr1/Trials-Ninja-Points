
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.LeaderboardReader import LeaderboardReader
from waitress import serve

app = Flask(__name__, static_url_path='', static_folder='../react-frontend/build')
#CORS(app) #comment this on deployment
api = Api(app)



@app.route("/", defaults={'path':''}, methods=['GET', 'POST'])
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


api.add_resource(LeaderboardReader, "/flask/read-lb")


if __name__ == "__main__":
    app.run(host='0.0.0.0')

