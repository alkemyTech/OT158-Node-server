'use strict';
const {
    Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Comments extends Model {
        static associate(models) {
            this.belongsTo(models.Users,
                { as: 'user' }
            )
        };
    };
    Comments.init({
        body: DataTypes.TEXT,
        userId: DataTypes.INTEGER,
        deletedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Comments',
    });
    return Comments;
};