var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example3.findAll(
      { limit: 10, order: [['like', 'DESC']] }
    ).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example3.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Update a new example
  app.put("/api/examples/:id", function (req, res) {
    db.Example3.increment({ like: + 1 }, { where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example3.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};


