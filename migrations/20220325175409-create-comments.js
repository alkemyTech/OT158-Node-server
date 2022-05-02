'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.TEXT
      },
<<<<<<< HEAD
      user_id: {
        type: Sequelize.INTEGER,
=======
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
<<<<<<< HEAD
      post_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "News",
          key: "id",
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
=======
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};
