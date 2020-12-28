'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBadge = sequelize.define('UserBadge', {
    user_id: DataTypes.INTEGER,
    badge_id: DataTypes.INTEGER
  }, {});
  UserBadge.associate = function(models) {
    // associations can be defined here
  };
  return UserBadge;
};