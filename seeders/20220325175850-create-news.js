'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("News",
    [
      {
        name:"New 1",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 2",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 3",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 4",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 5",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 6",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 7",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 8",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 9",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 10",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 11",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 12",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name:"New 13",
        content:"text example",
        image:"image.jpg",
        categoryId:1,
        type:"novedad",
        createdAt: new Date,
        updatedAt: new Date
      },
  ], {});
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
