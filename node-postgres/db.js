const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "google123",
  host: "localhost",
  port: 5432,
  database: "my_database"
});

module.exports = pool;