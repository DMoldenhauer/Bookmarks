// var db = {  };

// db.User = require("../models/users");
// db.Bookmark = require("../models/bookmarks");

var User = require ("../models/users.js");

function createUser(userObj, cb) {
    
    User.create(userObj)
        .then(function (dbUser) {

            cb(dbUser);
        });
};

function userLogin(userObj, cb) {
    User.findOne(userObj)
       .then(function (loginResult) {
        if (userLogin) {
            cb(userLogin);
        }
        else

            cb(false);
    });
};


//Testing
//Testing
// createUser({ first_name: "First Name", last_name: "Last Name", email: "email", pswd: "Password" }, function (userObj) {

//     console.log("createUser result from user-api-routes.js is: ", userObj);
// });

// userLogin("email", "Password", function (loginResult) {
//     console.log("userLogin result from user-api-routes.js is: ", loginResult);
// });

module.exports = {
    createUser: createUser,
    userLogin: userLogin
};
