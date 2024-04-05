'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        user: 'John Doe',
        body: 'Hello, world!',
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 'Jane Doe',
        body: 'Goodbye, world!',
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 'John Doe',
        body: 'Hello, world!',
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: 'Jane Doe',
        body: 'Goodbye, world!',
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
