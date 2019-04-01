var db = require("../models");
var path = require('path');
module.exports = function (app) {
  Load index page
  app.get("/", function (req, res) {
    db.projectTwo.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  //--------------WORKS ON HTML PAGES-------------------------------/
  // app.get("/", function (req, res) {
  //   res.sendFile(path.join(__dirname, "/../models/user.js"));
  // });
  //--------------WORKS ON HTML PAGES-------------------------------/


  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.projectTwo.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
