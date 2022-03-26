"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News.belongsTo(models.Categories, { as: "category" });
    }
  }
  News.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING,
      isDeleted: DataTypes.BOOLEAN,
      categoryId: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps:true,
      paranoid:true,
      modelName: "News",
    }
  );
  return News;
};
