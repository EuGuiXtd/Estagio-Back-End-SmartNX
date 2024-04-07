

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.STRING(15)
      },
      text: {
        type: Sequelize.STRING(300)
      },
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};
