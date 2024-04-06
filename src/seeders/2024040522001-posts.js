'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        user: 'John Doe',
        title: 'Hello',
        body: 'Hello, world!',
      },
      {
        user: 'Jane Doe',
        title: 'Goodbye!',
        body: 'Goodbye, world!',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
