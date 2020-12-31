'use strict';
module.exports = (sequelize, DataTypes) => {
  const Winery = sequelize.define('Winery', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    website: DataTypes.STRING
  }, {});
  Winery.associate = function(models) {
    // associations can be defined here
    Winery.hasMany(models.Review, {foreignKey:"winery_id"})
    Winery.hasMany(models.Wine, {foreignKey:"winery_id"})
  };
  return Winery;
};
