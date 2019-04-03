module.exports = function (sequelize, DataTypes) {
  var Example2 = sequelize.define("Example2", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    like: DataTypes.INTEGER
  });
  return Example2;
};
