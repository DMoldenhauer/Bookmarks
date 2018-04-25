// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./models");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./routes/search-api-routes.js")(app);
var router = require("./controllers/submit-api-routes.js");

app.post("/api/bookmarks", function(req, res){
  router.createBookmark(req.body, function(hi){
   res.json(hi) 
   console.log(hi)
  });
});

var router4 = require("./controllers/search-api-routes.js");
app.get("/api/bookmarks", function(req, res){
  router4.searchBookmark(req.body, function(hi){
   res.json(hi) 
   console.log(hi)
  });
});

var router2 = require("./controllers/user-api-routes.js");

app.post("/api/newUser", function(req, res){
  router2.createUser(req.body, function(hi){
    res.json(hi)
    console.log(hi)
  });
});


var router3 = require("./controllers/user-api-routes.js");

app.get("/api/login", function(req, res){
  router3.userLogin(req.body, function(hi){
    res.json(hi)
    console.log(hi)
  });
});


require("./controllers/html-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {

// });
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});