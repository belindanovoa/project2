var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example3.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);

      console.log(JSON.stringify(dbExamples[0]));
      var sortedArray = [];
      dbExamples.forEach(element => {
        sortedArray.push(element.like);
        var popular = sortedArray.sort(function (a, b) { return b - a });
        console.log({ sortedArray });
        for (var i = 0; i < dbExamples.length; i++) {
          if (dbExamples[i].like === sortedArray[2]) {
            console.log("id: " + dbExamples[i].id + " - Name: " + dbExamples[i].text + " - descrition: " + dbExamples[i].description + " - like: " + dbExamples[i].like);
          }
          if (dbExamples[i].like === sortedArray[1]) {
            console.log("id: " + dbExamples[i].id + " - Name: " + dbExamples[i].text + " - descrition: " + dbExamples[i].description + " - like: " + dbExamples[i].like);
          }
          if (dbExamples[i].like === sortedArray[0]) {
            console.log("id: " + dbExamples[i].id + " - Name: " + dbExamples[i].text + " - descrition: " + dbExamples[i].description + " - like: " + dbExamples[i].like);
          }
        }
      });
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


