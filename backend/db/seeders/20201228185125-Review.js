'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
        content: 'I loved this winery, but the service was a little slow',
        rating: 4,
        user_id: 1,
        wine_id: null,
        winery_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Great red blends and a lovely atmosphere',
        rating: 5,
        user_id: 2,
        wine_id: null,
        winery_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Will not be returning here',
        rating: 1,
        user_id: 2,
        wine_id: null,
        winery_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
