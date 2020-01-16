const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const queries = require("./queries");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "mymogadmin",
  host: "mymog.cdbuzlmtuf9n.us-west-1.rds.amazonaws.com",
  password: "MyMog123!",
  database: "MyMog",
  port: 5432
});

app.use(bodyParser.json());

validateUser = user => {
  const validEmail = typeof user.email == "string" && user.email.trim() != "";
  const validPassword =
    typeof user.password == "string" && user.password.trim() != "" && user.password.trim().length >= 6;
  return validEmail && validPassword;
};

app.post("/user/new_user", (req, res, next) => {
  let { email, password, admin, username } = req.body;
  // if (validateUser(req.body)) {
  //   res.json({
  //     message: "User is valid"
  //   });
  // } else {
  //   next(new Error("invalid user"));
  // }
  if (queries.checkEmail(email) == true) {
    bcrypt.hash(password, saltRounds).then(hash => {
      if (admin == null) admin = false;
      pool.query(
        "INSERT INTO user_tbl ( email, password, admin, username) VALUES ($1,$2,$3,$4) RETURNING id",
        [email, hash, admin, username],
        (error, results) => {
          if (error) {
            res.status(400);
            next(error);
          }
          res.status(201);
        }
      );
    });
  } else {
    res.status(404).json("Email already in use");
  }
});

app.listen(3001);

console.log("Listening on port 3001");

module.exports = {
  pool
};
