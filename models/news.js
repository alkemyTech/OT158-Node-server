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
      name: 
      {type:DataTypes.STRING,
        allowNull: false
      },
      content: 
      {type:DataTypes.TEXT,
        allowNull: false
      },
      image: 
      {type:DataTypes.STRING,
        allowNull: false
      },
      deletedAt: DataTypes.DATE,
      categoryId: 
      {type:DataTypes.INTEGER,
        allowNull: false
      },
      type: 
      {type:DataTypes.STRING,
        allowNull: false
      },
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
