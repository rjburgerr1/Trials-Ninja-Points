const mysql = require("mysql");
// Set database connection credentials
const config = {
  host: "localhost",
  user: "root",
  password: "Sleeping1!",
  database: "accounts",
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
