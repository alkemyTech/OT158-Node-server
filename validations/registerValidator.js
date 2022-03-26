const { check, body } = require('express-validator');
const db = require('../models');
// const db = require('../models');

module.exports = [
    check('firstName')
    .notEmpty()
    .isAlpha()
    .withMessage('name required'),

    check('lastName')
    .notEmpty()
    .isAlpha()
    .withMessage('last name required'),

    check('email')
    .isEmail()
    .withMessage('email format invalid'),

    body('email').custom( value => {
        return db.Users.findOne({
            where: { email: value }
        })
        .then(user => {
            if(user) return Promise.reject("email is already in use");
        })
    }),
]