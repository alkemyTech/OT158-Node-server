'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

		static associate(models) {
			Users.belongsTo(models.Roles, { as: 'role' });
		}
	}
	Users.init(
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
<<<<<<< HEAD
			image: {
=======
			photo: {
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
				type: DataTypes.STRING,
				allowNull: true
			},
			roleId: DataTypes.INTEGER,
			deletedAt: DataTypes.DATE
		},
		{
			sequelize,
			modelName: 'Users',
			timestamps: true,
			paranoid: true
		}
	);
	return Users;
<<<<<<< HEAD
};
=======
};
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
