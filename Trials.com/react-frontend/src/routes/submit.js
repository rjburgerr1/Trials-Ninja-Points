import npCalc from "../components/ninjapoints.component";

// Load the MySQL pool connection
const pool = require("../data/config");

const router = (app) => {
  // Display all users
  app.get("/users", (request, response) => {
    pool.query("SELECT * FROM information", (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Add a new user
  //Name attribute in form element sets "'gamertag', and 'rank' etc...."
  //Format:
  //sql: "INSERT INTO runs SET `gamertag` = 'efwef', `rank` = 'wefwef', `faults` = 'wefwe', `time` = 'fwefwef', `track-name` = 'wefwef', `ninja-points` = 'wefwef'"

  app.post("/submit-run", (request, response) => {
    const np = npCalc.calculateNinjaPoints();
    console.log("HERERERER");
    pool.query(
      "INSERT INTO runss SET `gamertag` = '" +
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

        response.status(201).send(`Run Addded `);
      }
    );
  });
};
// Export the router
module.exports = router;
