'use strict';
const {
    Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Comments extends Model {
        static associate(models) {
            this.belongsTo(models.Users,{
              as: 'user',
              foreignKey:"user_id"
            }),
            this.belongsTo(models.News,{
              as: "new",
              foreignKey:"post_Id"
            })
        };
    };
    Comments.init({
        body: DataTypes.TEXT,
        user_id: DataTypes.INTEGER,
        post_id: DataTypes.INTEGER,
        deletedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Comments',
    });
    return Comments;
};
