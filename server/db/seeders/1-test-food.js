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
          seller_id: 10,
          buyer_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Iscander Kebab",
          image: "https://picsum.photos/200",
          original_price: 200,
          discount: 0.5,
          location: "20m",
          is_paid: false,
          seller_id: 10,
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
          seller_id: 11,
          buyer_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salad",
          image: "https://picsum.photos/200",
          original_price: 100,
          discount: 0.5,
          location: "200m",
          is_paid: true,
          seller_id: 11,
          buyer_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken Masala",
          image: "https://picsum.photos/200",
          original_price: 260,
          discount: 0.5,
          location: "200m",
          is_paid: true,
          seller_id: 12,
          buyer_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Green Curry",
          image: "https://picsum.photos/200",
          original_price: 400,
          discount: 0.5,
          location: "400m",
          is_paid: true,
          seller_id: 12,
          buyer_id: null,
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
