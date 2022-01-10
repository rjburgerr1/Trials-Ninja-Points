// Require packages and set the port
const bodyParser = require("body-parser");
const cors = require("cors");
const ChatRoute = require("./routes/chat");
const DataRoute = require("./routes/leaderboards/leaderboards.js");
const express = require("./node_modules/express");
const ImageUpload = require("./routes/profiles/image-upload");
const SignupRoute = require("./routes/signup");
const SubmitRoute = require("./routes/submit");
const TrackRoute = require("./routes/track");
const port = 3002;
const ProfileRoute = require("./routes/profiles/profile");
const synthesizeTrackData = require("./routes/synthesize-collective-opinions");
const backupLeaderboard = require("./routes/leaderboards/backup-leaderboards");

const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:3050",
        "https://trialsnp.netlify.app",
    ],
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    //console.log(JSON.stringify(req.headers));
    res.header(
        "Access-Control-Allow-Origin",
        "http://localhost:3000",
        "http://localhost:3050",
        "https://trialsnp.netlify.app"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

backupLeaderboard();
synthesizeTrackData();
DataRoute(app);
SubmitRoute(app);
SignupRoute(app);
ProfileRoute(app);
ImageUpload(app);
TrackRoute(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});

ChatRoute(app, server);
