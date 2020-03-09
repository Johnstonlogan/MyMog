const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const axios = require("axios");
const queries = require("./queries");
const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
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
  let now = new Date();
  let { email, password, admin, username } = req.body;
  if (validateUser(req.body)) {
    if (queries.checkEmail(email.toLowerCase())) {
      bcrypt.hash(password, saltRounds).then(hash => {
        if (admin == null) admin = false;
        pool.query(
          "INSERT INTO user_tbl ( email, password, admin, username, created) VALUES ($1,$2,$3,$4,$5) RETURNING id",
          [email.toLowerCase(), hash, admin, username, now],
          (error, results) => {
            if (error) {
              res.status(400).json("Email Already in use");
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
app.post("/user/login", (req, res) => {
  let { email, password, admin, username } = req.body;
  // authenticate user
  queries.checkEmail(email.toLowerCase()).then(res => {
    if(res === false){
      console.log(password)
      pool.query("SELECT password FROM user_tbl WHERE email = $1", [email.toLowerCase()]).then(res => {
   
        bcrypt.compare( password,res.rows[0].password).then(res =>{
          
        })
      })
    }
    else{return null}

  })
   
    
    
    
    .catch(err => {throw new Error(err)});
  
  
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
