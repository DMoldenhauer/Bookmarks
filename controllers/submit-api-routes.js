//var db = require("../models");
//requiring ../model/index.js
//index.js looks at all files/models in models/
var Bookmark = require ("../models/bookmarks.js");
function createBookmark (field, cb) {

Bookmark.create(field.body)
    .then(function (dbSubmit) {

        cb(dbSubmit);

});

}


// createBookmark(
//     {url         : "URL", 
//     title        : "title", 
//     summary      : "summary text", 
//     category     : "category", 
//     rating       : "rating",
//     author       : "author", 
//     added_by     : "added by", 
//     tags         : "tags", 
//     slack_channel: "slack channel"}, function (field) {
//     console.log("createBookmark result from submit-api-routes.js is: ", field);
// });

//Testing
// console.log("createBookmark result from submit-api-routes.js is: ", field);

module.exports = {
    createBookmark: createBookmark

};