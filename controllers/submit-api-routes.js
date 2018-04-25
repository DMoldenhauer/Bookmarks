//var db = require("../models");
//requiring ../model/index.js
//index.js looks at all files/models in models/
var Bookmark = require ("../models/bookmarks.js");
function createBookmark (urlObj, cb) {

Bookmark.create(urlObj)
    .then(function (dbSubmit) {

        cb(dbSubmit);

});

}


//Testing
// console.log("createBookmark result from submit-api-routes.js is: ", field);

module.exports = {
    createBookmark: createBookmark,
    

};