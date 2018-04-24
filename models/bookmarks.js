// //setup dependencies
var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to 
// var sequelize = require("../config/config.json"); 


var connection = new Sequelize({
  username: "root",
  password: "root",
  database: "bootcamp_bookmarksDB",
  port: 8889,
  host: "127.0.0.1",
  dialect: "mysql"
})

console.log ("I am connected in the bookmark file")

//Create submit Table Structure
var Bookmark = connection.define("bookmarks", {
  title: Sequelize.STRING,
  category:Sequelize.STRING,
  added_by: Sequelize.STRING,
  slack_channel: Sequelize.STRING,
  favorite: Sequelize.BOOLEAN,
  tags:Sequelize.STRING,
  url: Sequelize.STRING,
  summary: Sequelize.TEXT,
  rating: Sequelize.INTEGER,
  author: Sequelize.STRING,
});

console.log("I am able to make a table with fields i need")

Bookmark.sync();


console.log("i have columns in my bookmark table")

module.exports = Bookmark;