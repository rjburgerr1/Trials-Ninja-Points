
import easyocr
import flask

#app = flask.Flask("__main__")


# need to run only once to load model into memory
reader = easyocr.Reader(['ch_sim', 'en'])
result = reader.readtext('inhuman-leaderboard.jpg', detail=0)

track_title = result[0]
size = len(track_title)
track_title = track_title[:size-11]
track_title.strip()

for i in range(0, len(result)):
    if result[i] == "Rank":
        firstRank = result[i+1]

print(firstRank)
print(track_title)
print(result)

result2 = reader.readtext('luscious-leaderboard.jpg', detail=0)
print(result2)
# @app.route("/")
# def my_index():
#    return flask.render_template("index.html", token=result)


# app.run(debug=True)
