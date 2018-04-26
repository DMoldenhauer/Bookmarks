// //setup dependencies
var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to 
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