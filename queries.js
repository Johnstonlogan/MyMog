const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
});

const checkEmail = async email => {
 return new Promise((resolve, reject) =>{
  pool.query("SELECT email FROM user_tbl WHERE email = $1", [email]).then(res =>{
    if(res.rows.length === 0){
   
      return resolve(true)
    }
    else {
 
      return resolve(false)}
   
  })

 })
}



module.exports = {
  checkEmail
};
