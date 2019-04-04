module.exports = function (sequelize, DataTypes) {
  var Example3 = sequelize.define("Example3", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    like: DataTypes.INTEGER
  });
  return Example3;
};
