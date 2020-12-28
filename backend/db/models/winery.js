'use strict';
module.exports = (sequelize, DataTypes) => {
  const Winery = sequelize.define('Winery', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  Winery.associate = function(models) {
    // associations can be defined here
  };
  return Winery;
};