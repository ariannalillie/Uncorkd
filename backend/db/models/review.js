'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    wine_id: DataTypes.INTEGER,
    winery_id: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};