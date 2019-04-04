var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example3.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example3.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

//   WORKS FOR SINGLE INCREMENT
  app.put("/api/examples/:id", function (req, res) {
  db.Example3.increment( { like: + 1 }, { where: { id: req.params.id } }).then(function (dbExample) { 
    res.json(dbExample);

  });
});

// Works for few examples
//   app.put("/api/examples/:id", function (req, res) {
//   db.Example3.increment({ like: +1 }, { where: { id: req.params.id } }).then(function (dbExample) {
//       res.json(dbExample);
//   });
// });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example3.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
