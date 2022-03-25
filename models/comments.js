'use strict';
const {
    Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Comments extends Model {
        static associate(models) {
            this.hasMany(models.Users, { as: 'user', foreignKey: 'userId' });
        }
    };
    Comments.init({
        body: DataTypes.TEXT,
        deletedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Comments',
    });
    return Users;
};