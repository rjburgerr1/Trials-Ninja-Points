// Load the MySQL pool connection
const pool = require("../data/config");

const router = (app) => {
  app.get("/", (request, response) => {
    response.send({
      message: "Node.js and Express REST API",
    });
  });

  // Display all users
  app.get("/users", (request, response) => {
    pool.query("SELECT * FROM information", (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display all users
  app.get("/submit-run", (request, response) => {
    pool.query("SELECT * FROM runs", (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display a single user by ID
  app.get("/users/:id", (request, response) => {
    const id = request.params.id;

    pool.query("SELECT * FROM users WHERE id = ?", id, (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Add a new user
  app.post("/users", (request, response) => {
    pool.query(
      "INSERT INTO information SET ?",
      request.body,
      (error, result) => {
        if (error) throw error;

        response.status(201).send(`User added with ID: ${result.insertId}`);
      }
    );
  });

  // Add a new user
  //Name attribute in form element sets "'gamertag', and 'rank' etc...."
  //Format:
  //sql: "INSERT INTO runs SET `gamertag` = 'efwef', `rank` = 'wefwef', `faults` = 'wefwe', `time` = 'fwefwef', `track-name` = 'wefwef', `ninja-points` = 'wefwef'"

  app.post("/submit-run", (request, response) => {
    console.log(request.body.gamertag);
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
        "', `ninja-points` = '123'",
      request.body,
      (error, result) => {
        if (error) throw error;

        response.status(201).send(`Run ADded `);
      }
    );
  });

  // Update an existing user
  app.put("/users/:id", (request, response) => {
    const id = request.params.id;

    pool.query(
      "UPDATE information SET ? WHERE id = ?",
      [request.body, id],
      (error, result) => {
        if (error) throw error;

        response.send("User updated successfully.");
      }
    );
  });
  // Delete a user
  app.delete("/users/:id", (request, response) => {
    const id = request.params.id;

    pool.query("DELETE FROM information WHERE id = ?", id, (error, result) => {
      if (error) throw error;

      response.send("User deleted.");
    });
  });
};

// Export the router
module.exports = router;
