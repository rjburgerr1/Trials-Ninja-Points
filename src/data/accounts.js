// Load the MySQL pool connection
const pool = require("./config");

// Display all users
app.get("/users", (request, response) => {
  pool.query("SELECT * FROM users", (error, result) => {
    if (error) throw error;

    response.send(result);
  });
});
