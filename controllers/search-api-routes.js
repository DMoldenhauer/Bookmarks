var bookmarkSearch = require("../models/bookmarks.js");

function searchBookmark(urlObj, cb) 
{

  bookmarkSearch.findAll(urlObj)
 
  .then(function (res) {
    if (res!=null) {
      cb(res);
    }
    else

      cb(false);
  });
};


module.exports = {
  searchBookmark: searchBookmark
};



//Testing
//Testing
// createser("email", "Password", function (res) {
//   console.log("searchBookmark result from user-api-routes.js is: ", res);
// });
