'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Slides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.STRING
      },
      organizationId: {
        type: Sequelize.INTEGER,
        references: {//table not exists. Run migrations with this block comment 
          model: 'Organizations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'//
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Slides');
  }
};