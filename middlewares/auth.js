const { check, body, validationResult } = require("express-validator");
<<<<<<< HEAD
const { getUserByEmail } = require('../repositories/users');
const bcrypt = require('bcryptjs');

const loginValidation = async (req, res, next) => {
  try {
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
  await body('email').custom(async (value) => {
    const getUser = await getUserByEmail({ where: { email: value } });

    if (!getUser) {
      return Promise.reject("Invalid credentials");
    };

    if (!bcrypt.compareSync(req.body.password, getUser.dataValues.password)) {
      return Promise.reject("Invalid credentials");
    };
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

  } catch (error) {
    next(error);
  }
};

module.exports = { loginValidation };
=======
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
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
