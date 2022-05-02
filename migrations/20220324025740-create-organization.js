'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Organizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      welcomeText: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      aboutUsText: {
        type: Sequelize.TEXT
      },
<<<<<<< HEAD
      facebookUrl: {
        type: Sequelize.STRING
      },
      linkedinUrl: {
        type: Sequelize.STRING
      },
      instagramUrl: {
        type: Sequelize.STRING
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Organizations');
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
