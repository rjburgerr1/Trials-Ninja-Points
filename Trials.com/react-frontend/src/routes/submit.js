// Load the MySQL pool connection
const pool = require("../data/database-config");

const router = (app) => {
  // Display all users
  app.get("/users", (request, response) => {
    pool.query("SELECT * FROM information", (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Add a new user
  // ` (grave) for column and ' (apostrophe) for values for syntax fun :)
  //Name attribute in form element sets "'gamertag', and 'rank' etc...." name = ninjaLevel === request.body.ninjaLevel
  //Format:
  //sql: "INSERT INTO runs SET `gamertag` = 'efwef', `rank` = 'wefwef', `faults` = 'wefwe', `time` = 'fwefwef', `track-name` = 'wefwef', `ninja-points` = 'wefwef'"

  app.post("/submitted-run", (request, response) => {
    console.log("HERERERER");
    pool.query(
      "INSERT INTO runs SET `gamertag` = 'placeholder for now' , `rank` = '1' , `faults` = '" +
        request.body.faults +
        "', `time` = '" +
        request.body.time +
        "', `track-name` = '" +
        request.body.trackName +
        "', `ninja-points` = '123" +
        "', `ninja-level` = '" +
        request.body.ninjaLevel +
        "', `length` = '" +
        request.body.length +
        "', `fault-sponginess` = '" +
        request.body.faultSponginess +
        "'",
      (error, result) => {
        if (error) throw error;

        response.status(201).send(`Run Addded `);
      }
    );
  });
};
// Export the router
module.exports = router;
