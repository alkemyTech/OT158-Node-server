"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Organizations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* Organizations.hasMany(models.Slides, {
        foreignKey: 'organizationId',
        as: 'slides',
      }) */
    }
  }
  Organizations.init({
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
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Organizations",
  });
  return Organizations;
};
