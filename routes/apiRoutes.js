var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example2.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example2.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  app.put("/api/examples/:id", function (req, res) {
    db.Example2.update( {like: "like + 1"}, { where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
  });
  console.log("hi");
});


  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example2.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
