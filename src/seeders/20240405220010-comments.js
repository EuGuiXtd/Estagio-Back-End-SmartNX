

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        user: 'John Doe',
        text: 'Hello, world!',
        postId: 1,
      },
      {
        user: 'Jane Doe',
        text: 'Goodbye, world!',
        postId: 1,
      },
      {
        user: 'John Doe',
        text: 'Hello, world!',
        postId: 2,
      },
      {
        user: 'Jane Doe',
        text: 'Goodbye, world!',
        postId: 2,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
