'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('Items', [
      {
          name: "Doner Kebab",
          image: "https://picsum.photos/200",
          original_price: 200,
          discount: 0.3,
          location: "50m",
          is_paid: true,
          seller_id: 1,
          buyer_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iscander Kebab",
          image: "https://picsum.photos/200",
          original_price: 200,
          discount: 0.5,
          location: "50m",
          is_paid: false,
          seller_id: 1,
          buyer_id:null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Durum",
          image: "https://picsum.photos/200",
          original_price: 300,
          discount: 0.3,
          location: "100m",
          is_paid: true,
          seller_id: 3,
          buyer_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
     ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
