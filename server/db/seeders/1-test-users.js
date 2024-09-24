'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
          {
        username: "Sam",
        email: "sam@sam",
        password: '1234',
        role: 'seller',
        createdAt: new Date(),
        updatedAt: new Date()
        },
              {
        username: "Kir",
        email: "kir@kir",
        password: '1234',
        role: 'buyer',
        createdAt: new Date(),
        updatedAt: new Date()
        },
                    {
        username: "Nick",
        email: "nick@nick",
        password: '1234',
        role: 'seller',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
