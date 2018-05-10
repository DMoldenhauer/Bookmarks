var bookmarkSearch = require("../models/bookmarks.js");

function searchBookmark(urlObj, cb) {


//search for specific attributes - hash usage
// bookmarkSearch.findAll ({ where: { 
//      category:"   " 
//  } })
//      .then(projects => {
//  projects will be an array of Project instances with the specified name
// })

  console.log('urlObj', urlObj);
  //console.log('urlObj', JSON.stringify(urlObj));

  /*Post.findAll({
    where: {
      authorId: 2
    }
  });*/

  //bookmarkSearch.findAll(urlObj)
  bookmarkSearch.findAll({
    where: urlObj // { category: "MongoDB" }
  })
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
