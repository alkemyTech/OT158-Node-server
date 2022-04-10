'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

<<<<<<< HEAD
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
      photo: {
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
=======
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
			image: {
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
>>>>>>> 0b1d94ede7bb9428f8f679ff9ff7ca136a418335
};
