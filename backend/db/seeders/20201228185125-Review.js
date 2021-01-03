'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
        content: 'I loved this winery, but the service was a little slow',
        rating: 4,
        imgUrl: 'https://www.romanticasheville.com/sites/default/files/images/basic_page/SilverForkWinery.jpg',
        user_id: 1,
        wine_id: null,
        winery_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Great red blends and a lovely atmosphere',
        rating: 5,
        imgUrl: 'https://pbs.twimg.com/media/D9YMkgMWwAAzmBT.jpg',
        user_id: 2,
        wine_id: null,
        winery_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Will not be returning here',
        rating: 1,
        imgUrl: 'https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/media/Activities/Wineries%20%26%20Breweries/malibu-wine-safaris-group.jpg?itok=Ouj_YRJ9',
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
