'use strict';
const {
    Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Comments extends Model {
        static associate(models) {
<<<<<<< HEAD
            this.belongsTo(models.Users,{
              as: 'user',
              foreignKey:"user_id"
            }),
            this.belongsTo(models.News,{
              as: "new",
              foreignKey:"post_Id"
            })
=======
            this.belongsTo(models.Users,
                { as: 'user' }
            )
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
        };
    };
    Comments.init({
        body: DataTypes.TEXT,
<<<<<<< HEAD
        user_id: DataTypes.INTEGER,
        post_id: DataTypes.INTEGER,
=======
        userId: DataTypes.INTEGER,
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
        deletedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Comments',
    });
    return Comments;
<<<<<<< HEAD
};
=======
};
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
