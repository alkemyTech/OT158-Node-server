const { check, body, validationResult } = require("express-validator");
const { Users } = require('../models');
const bcrypt = require('bcryptjs');

const loginValidation = async (req, res, next) => {
    await check('email')
        .notEmpty()
        .withMessage('This field email cannot be empty').bail()
        .isEmail()
        .withMessage('Invalid field')
        .run(req);
    await check('password')
        .notEmpty()
        .withMessage('This field password cannot be empty')
        .run(req);
    await body('custom').custom((value, { req }) => {
        return Users.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then(user => {
                if (!bcrypt.compareSync(req.body.password, user.dataValues.password)) {
                    return Promise.reject("Invalid credentials");
                }
            })
            .catch(error => {
                return Promise.reject("Invalid credentials");
            });
    })
        .run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(401).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    next();
};

module.exports = { loginValidation };