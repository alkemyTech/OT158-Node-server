"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Organizations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organizations.init(
    {
<<<<<<< HEAD
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      deletedAt: DataTypes.DATE,
      welcomeText: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      aboutUsText: DataTypes.TEXT,
      facebookUrl: DataTypes.STRING,
      linkedinUrl: DataTypes.STRING,
      instagramUrl: DataTypes.STRING,
=======
      name: { 
        type: DataTypes.STRING,
        allowNull: false 
      },
      image: { 
        type: DataTypes.STRING,
        allowNull: false 
      },
      address: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: { 
        type: DataTypes.STRING,
        allowNull: false 
      },
      deletedAt: DataTypes.DATE,
      welcomeText: { 
        type: DataTypes.TEXT,
        allowNull: false 
      },
      aboutUsText: DataTypes.TEXT,
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "Organizations",
    }
  );
  return Organizations;
};
