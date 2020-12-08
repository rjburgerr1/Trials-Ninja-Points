// Load the MySQL pool connection
const pool = require("../data/config");

// Route the app
const router = (app) => {
  // Display welcome message on the root
  app.get("/", (request, response) => {
    response.send({
      message: "Welcome to the Node.js Express REST API!",
    });
  });

  // Display all users
  app.get("/sign-up-complete", (request, response) => {
    console.log("GET");
    pool.query("SELECT * FROM information", (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Add a new user
  //Name attribute in form element sets "'gamertag', and 'rank' etc...."
  //Format:
  //sql: "INSERT INTO runs SET `gamertag` = 'efwef', `rank` = 'wefwef', `faults` = 'wefwe', `time` = 'fwefwef', `track-name` = 'wefwef', `ninja-points` = 'wefwef'"

  // Add a new user
  app.post("/sign-up-complete", (request, response) => {
    console.log("POST");

    pool.query(
      "INSERT INTO information SET `email` = '" +
        request.body.email +
        "' , `password` = '" +
        request.body.password +
        "'",
      request.body,
      (error, result) => {
        if (error) throw error;

        response.status(201).send(`Account Added flag`);
      }
    );
  });

  // Delete a user
  app.delete("/users/:id", (request, response) => {
    const id = request.params.id;

    pool.query("DELETE FROM users WHERE id = ?", id, (error, result) => {
      if (error) throw error;
      response.send("User deleted.");
    });
  });
};

// Export the router
module.exports = router;
