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

      }).then(function(data) {
        var hbsObject = {
          users: data
        };
        res.render("index", hbsObject);
      });
console.log("what is user", User);

      // sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
    });
  }
    // // cms route loads cms.html
    // app.get("/cms", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/cms.html"));
    // });

    // // blog route loads blog.html
    // app.get("/blog", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/blog.html"));
    // });

    // // authors route loads author-manager.html
    // app.get("/authors", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    // });