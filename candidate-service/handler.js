const db = require("./db_connect")


module.exports.getAllTodos = async (event, context, callback) => {
 
  db.getById('user_tbl', 3)
    .then(res => {
      console.log(res)
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      console.log(e);
      callback(null, {
        statusCode: e.statusCode || 500,
        body: 'Error: Could not find Todos: ' + e
      })
    })
  

};

