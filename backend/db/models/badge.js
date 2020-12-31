'use strict';
module.exports = (sequelize, DataTypes) => {
  const Badge = sequelize.define('Badge', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Badge.associate = function(models) {
    // associations can be defined here
    Badge.hasMany(models.UserBadge, {foreignKey: "badge_id"})
  };
  return Badge;
};
