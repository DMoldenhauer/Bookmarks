
var apipath = require ("/routes/user-api-routes.js");

//Testing
//Testing
createUser("email", "First Name", "Last Name", "Password", function (userObj) {
    console.log("createUser result from user-api-routes.js is: ", userObj);
});

userLogin("email", "Password", function (loginResult) {
    console.log("userLogin result from user-api-routes.js is: ", loginResult);
});

createBookmark("URL", "title", "summary text", "category", "rating",
"author", "added by", "tags", "slack channel", "favorite boolean", function (field) {
    console.log("createBookmark result from submit-api-routes.js is: ", field);
});

createUser("email", "Password",  function (res) {
    console.log( "searchBookmark result from user-api-routes.js is: ", res);
  });
  