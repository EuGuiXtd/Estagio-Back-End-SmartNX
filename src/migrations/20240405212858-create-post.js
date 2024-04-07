

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.STRING(15)
      },
      title: {
        type: Sequelize.STRING(50)
      },
      text: {
        type: Sequelize.STRING(300)
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};
