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
			User.belongsTo(models.Roles, { as: 'role' });
		}
	}
	Users.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				unique: true,
				primaryKey: true
			},
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
			photo: {
				type: DataTypes.STRING,
				allowNull: false
			},
			roleId: DataTypes.INTEGER,
			deletedAt: DataTypes.DATE
		},
		{
			sequelize,
			modelName: 'Users',
      timestamps: true,
      paranoid: true,
		}
	);
	return Users;
};
