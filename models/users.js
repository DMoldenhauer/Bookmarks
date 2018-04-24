//setup dependencies
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to 
// var sequelize = require("../config/config.json"); 

var connection = new Sequelize({
    username: "root",
    password: "root",
    database: "bootcamp_bookmarksDB",
    port: 8889,
    host: "127.0.0.1",
    dialect: "mysql"
})


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