'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // activities associate with??
    static associate(models) {
    // define association here
      Activities.belongsTo(models.Category, {as: 'category'});
    }
  }
  Activities.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Activities',
    //timestamps 
    timestamps: true,
    // softDeletes
    paranoid:true
  });
  return Activities;
};