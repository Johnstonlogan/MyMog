const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const axios = require("axios");
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

// Validate that the user email/password is a string and that it is
// NOT an empty string, also password length of 6 or more
validateUser = user => {
  const validEmail = typeof user.email == "string" && user.email.trim() != "";
  const validPassword =
    typeof user.password == "string" && user.password.trim() != "" && user.password.trim().length >= 8;
  return validEmail && validPassword;
};

// create a new user, use validateUser (See validate user method).
// use checkEmail to ensure email is not already in use
app.post("/user/new_user", (req, res, next) => {
  let { email, password, admin, username } = req.body;
  if (validateUser(req.body)) {
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
  } else {
    res
      .status(401)
      .json("Please check that email is correct as well as the password length is greater than 7 characters");
  }
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/blueposts", (req, res, next) => {
  axios.get("https://us.forums.blizzard.com/en/wow/groups/blizzard-tracker/posts.json").then(response => {
    res.json({
      newsArray: response.data
    });
  });
});

app.listen(3001);

console.log("Listening on port 3001");

module.exports = {
  pool
};
