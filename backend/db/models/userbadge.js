'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBadge = sequelize.define('UserBadge', {
    user_id: DataTypes.INTEGER,
    badge_id: DataTypes.INTEGER
  }, {});
  UserBadge.associate = function(models) {
    // associations can be defined here
    UserBadge.belongsTo(models.Badge, {foreignKey: "badge_id"})
    UserBadge.belongsTo(models.User, {foreignKey: "user_id"})
  };
  return UserBadge;
};
