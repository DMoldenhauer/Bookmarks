//setup dependencies
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to 
// var sequelize = require("../config/config.json"); 

if (process.env.JAWSDB_URL) {
  var connection = new Sequelize({
    username: "hura4fj4dqe072x4",
    password: "hg8bhez2fmlj5eoj",
    database: "ufyfu8ke0nm851sb",
    port: 3306,
    host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  })
  } else {
  var connection = new Sequelize({
    username: "root",
    password: "root",
    database: "bootcamp_bookmarksDB",
    port: 8889,
    host: "localhost",
    dialect: "mysql"
  })
  }


//creates table user (and sequelize will add the "s" to the end)
// module.exports = function(sequelize, DataTypes) {
  var User = connection.define("users", {  //"users" matches the table
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING, 
    pswd: Sequelize.STRING,
  });

User.sync()

console.log("i have data in my user table")


module.exports = User;
console.log ("welcome to your user data")