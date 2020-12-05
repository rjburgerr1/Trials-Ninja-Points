import npCalc from "../components/ninjapoints.component";

// Load the MySQL pool connection
const pool = require("../data/config");

const router = (app) => {
  // Add a new user
  //Name attribute in form element sets "'gamertag', and 'rank' etc...."
  //Format:
  //sql: "INSERT INTO runs SET `gamertag` = 'efwef', `rank` = 'wefwef', `faults` = 'wefwe', `time` = 'fwefwef', `track-name` = 'wefwef', `ninja-points` = 'wefwef'"

  app.post("/submit-run", (request, response) => {
    const np = npCalc.calculateNinjaPoints();
    console.log(np);
    pool.query(
      "INSERT INTO runs SET `gamertag` = '" +
        request.body.gamertag +
        "' , `rank` = '" +
        request.body.rank +
        "' , `faults` = '" +
        request.body.faults +
        "', `time` = '" +
        request.body.time +
        "', `track-name` = '" +
        request.body.trackname +
        "', `ninja-points` = '" +
        np +
        "'",
      request.body,
      (error, result) => {
        if (error) throw error;

        response.status(201).send(`Run ADded `);
      }
    );
  });
};
// Export the router
module.exports = router;
