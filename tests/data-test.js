var Sequelize = require('sequelize');
var User = require("../models/users");  //use this with user file
var Bookmark = require("../models/bookmarks")


// var User = require("../models/usersWithJSON");  //use this with userJSON file


// GET route for getting all of the users
User.findAll({}).then(function(res) {
    // We have access to the todos as an argument inside of the callback function
    console.log(res);
});


// // find multiple entries
// User.findAll().then(users => {
//   // projects will be an array of all Project instances
// })


// GET route for getting all of the bookmarks
Bookmark.findAll({}).then(function(res) {
  // We have access to the todos as an argument inside of the callback function
  console.log(res);
});

