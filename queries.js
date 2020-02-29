const { Pool } = require("pg");
const pool = new Pool({
  user: "mymogadmin",
  host: "mymog.cdbuzlmtuf9n.us-west-1.rds.amazonaws.com",
  password: "MyMog123!",
  database: "MyMog",
  port: 5432
});

const checkEmail = email => {
  pool.query("SELECT email FROM user_tbl WHERE email = $1", [email], (error, results) => {
    if (results.rows.length == 0) {
      return false;
    } else {
      return true;
    }
  });
};

module.exports = {
  checkEmail
};
