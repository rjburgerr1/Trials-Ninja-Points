// Require packages and set the port
const express = require("express");
const port = 3002;
const bodyParser = require("body-parser");
const SubmitRoute = require("./routes/submit");
const SignupRoute = require("./routes/signup");
const ProfileRoute = require("./routes/profile");
const DataRoute = require("./routes/data");
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  console.log(JSON.stringify(req.headers));
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

DataRoute(app);
SubmitRoute(app);
SignupRoute(app);
ProfileRoute(app);

// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
