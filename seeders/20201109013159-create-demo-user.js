'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Usuario1',
          lastName: 'Usuario1',
          email: 'Usuario1@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario2',
          lastName: 'Usuario2',
          email: 'Usuario2@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario3',
          lastName: 'Usuario3',
          email: 'Usuario3@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario4',
          lastName: 'Usuario4',
          email: 'Usuario4@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario5',
          lastName: 'Usuario5',
          email: 'Usuario5@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario6',
          lastName: 'Usuario6',
          email: 'Usuario6@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario7',
          lastName: 'Usuario7',
          email: 'Usuario7@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario8',
          lastName: 'Usuario8',
          email: 'Usuario8@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario9',
          lastName: 'Usuario9',
          email: 'Usuario9@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario10',
          lastName: 'Usuario10',
          email: 'Usuario10@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 1,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario11',
          lastName: 'Usuario11',
          email: 'Usuario11@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario12',
          lastName: 'Usuario12',
          email: 'Usuario12@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario13',
          lastName: 'Usuario13',
          email: 'Usuario13@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario14',
          lastName: 'Usuario14',
          email: 'Usuario14@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario15',
          lastName: 'Usuario15',
          email: 'Usuario15@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario16',
          lastName: 'Usuario16',
          email: 'Usuario16@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario17',
          lastName: 'Usuario17',
          email: 'Usuario17@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario18',
          lastName: 'Usuario18',
          email: 'Usuario18@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario19',
          lastName: 'Usuario19',
          email: 'Usuario19@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Usuario20',
          lastName: 'Usuario20',
          email: 'Usuario20@test.com',
          password: bcrypt.hashSync('1234', 8),
          roleId: 2,
          image:
            'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
