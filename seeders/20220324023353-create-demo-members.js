'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('members', [
            {
                name: 'Member one',
                facebookUrl: 'https://www.facebook.com/memberOne',
                instagramUrl: 'https://www.instagram.com/memberOne',
                linkedinUrl: 'https://www.linkendin.com/memberOne',
                image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
                description: 'Description from member one',
                /* deletedAt */
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                name: 'Member two',
                facebookUrl: 'https://www.facebook.com/memberTwo',
                instagramUrl: 'https://www.instagram.com/memberTwo',
                linkedinUrl: 'https://www.linkendin.com/memberTwo',
                image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
                description: 'Description from member two',
                /* deletedAt */
                createdAt: new Date,
                updatedAt: new Date
            }], {});
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