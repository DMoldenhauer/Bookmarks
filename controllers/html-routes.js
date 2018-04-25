// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var User = require("../models/users.js");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    User.findAll({

    }).then(function (data) {
      var hbsObject = {
        users: data
      };
      res.render("index", hbsObject);
    });
    console.log("this is what html.routes.js is sending", User);


  });
}
