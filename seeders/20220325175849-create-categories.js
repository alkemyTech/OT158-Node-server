'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [{
      name:"category 1",
      description:"test category",
      image:"image.jpg",
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
