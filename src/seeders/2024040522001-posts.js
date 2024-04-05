'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        user: 'John Doe',
        body: 'Hello, world!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 'Jane Doe',
        body: 'Goodbye, world!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
