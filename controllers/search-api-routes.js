var db = require("../models");

function searchBookmark(field, value, cb) 
{

  db.Bookmark.findOne(field)
  ({


  }).then(function (res) {
    if (searchBookmark) {
      cb(field);
    }
    else

      cb(false);
  });
};


module.exports = {
  field: field
};



//Testing
//Testing
// createser("email", "Password", function (res) {
//   console.log("searchBookmark result from user-api-routes.js is: ", res);
// });
