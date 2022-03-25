'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      New.belongsTo(models.Categories, {as: 'category'});
    }
  }
  New.init({
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    idDelete: DataTypes.BOOLEAN,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};