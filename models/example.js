module.exports = function (sequelize, DataTypes) {
  var Example3 = sequelize.define("Example3", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return Example3;
};
