'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
      body: 'esto es un comentario',
      user_id: 1,
<<<<<<< HEAD
      post_id:1,
=======
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
