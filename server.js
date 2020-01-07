const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "mymogadmin",
  host: "mymog.cdbuzlmtuf9n.us-west-1.rds.amazonaws.com",
  password: "MyMog123!",
  database: "MyMog",
  port: 5432
});

app.use(bodyParser.json());

app.get("/user", (req, res, next) => {
  pool.query("SELECT * FROM user_tbl ", (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results.rows);
  });
});
app.post("/user/new_user", (req, res, next) => {
  let { fName, lName, email, password, admin } = req.body;
  bcrypt.hash(password, saltRounds).then(hash => {
    if (admin == null) admin = false;
    pool.query(
      "INSERT INTO user_tbl (fname, lname, email, password, admin) VALUES ($1,$2,$3,$4,$5) RETURNING id",
      [fName, lName, email, hash, admin],
      (error, results) => {
        if (error) {
          res.status(400);
          next(error);
        }
        res.status(201);
      }
    );
  });
});

app.listen(3001);

console.log("Listening on port 3001");

module.exports = {
  pool
};
