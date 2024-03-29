const { check, validationResult } = require("express-validator");

const validation = async (req, res, next) => {
  await check('name')
    .notEmpty()
    .withMessage('This field name cannot be empty').bail()
    .isString()
    .withMessage('This field must be a string')
    .run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    });
  }

  next();
};

module.exports = { validation };
