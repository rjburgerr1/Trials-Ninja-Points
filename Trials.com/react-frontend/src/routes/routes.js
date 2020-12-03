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
