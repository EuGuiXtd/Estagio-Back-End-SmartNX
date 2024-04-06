

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        user: 'John Doe',
        body: 'Hello, world!',
        postId: 1,
      },
      {
        user: 'Jane Doe',
        body: 'Goodbye, world!',
        postId: 1,
      },
      {
        user: 'John Doe',
        body: 'Hello, world!',
        postId: 2,
      },
      {
        user: 'Jane Doe',
        body: 'Goodbye, world!',
        postId: 2,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
