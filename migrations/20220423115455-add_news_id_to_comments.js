'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Comments', // table name
        'newId', // new field name
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'News',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
      ),
    ])
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Comments', 'newId'),
    ]);
  },
};
