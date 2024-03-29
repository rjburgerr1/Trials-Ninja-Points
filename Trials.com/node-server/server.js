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
const GetRun = require("./routes/get-run");
const EditRun = require("./routes/edit-run");
const DeleteRun = require("./routes/delete-run");
const port = process.env.NODE_PORT;
const ProfileRoute = require("./routes/profiles/profile");
const synthesizeTrackData = require("./routes/synthesize-collective-opinions");
const backupLeaderboard = require("./routes/leaderboards/backup-leaderboards");
const CalcNP = require("./routes/calculate-ninja-points");
const UpdateRuns = require("./synthesize-run-data/update-runs");
const UpdateTracks = require("./synthesize-run-data/update-tracks");

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

UpdateRuns();
UpdateTracks();
backupLeaderboard();
synthesizeTrackData();
EditRun(app);
DeleteRun(app);
GetRun(app);
CalcNP(app);
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
