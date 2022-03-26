'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // activities associate with??
    static associate(models) {
      activities.belongsTo(models.Roles, {as: 'role'});
    }
  };
  activities.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    // softDeletes??
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'activities',
    //timestamps here it's ok??
    timestamps: true,
    paranoid:true
  });
  return activities;
};