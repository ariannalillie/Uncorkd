'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wine = sequelize.define('Wine', {
    name: DataTypes.STRING,
    wine_type: DataTypes.STRING,
    wine_id: DataTypes.INTEGER
  }, {});
  Wine.associate = function(models) {
    // associations can be defined here
  };
  return Wine;
};