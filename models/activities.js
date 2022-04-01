'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Activities extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

		static associate(models) {
		}
	}
	Activities.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			content: {
				type: DataTypes.STRING,
				allowNull: false
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			deletedAt: DataTypes.DATE
		},
		{
			sequelize,
			modelName: 'Activities',
			timestamps: true,
			paranoid: true
		}
	);
	return Activities;

};

