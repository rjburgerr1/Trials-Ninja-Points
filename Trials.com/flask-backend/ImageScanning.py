
import easyocr
import flask

app = flask.Flask("__main__")


# need to run only once to load model into memory
reader = easyocr.Reader(['ch_sim', 'en'])
result = reader.readtext('inhuman-leaderboard.jpg')

print(result)


@app.route("/")
def my_index():
    return flask.render_template("index.html", token=result)


app.run(debug=True)
