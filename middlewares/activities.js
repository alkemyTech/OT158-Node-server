const { check, validationResult } = require("express-validator");
const { BadRequest } = require('../utils/status');

const updateValidator = async (req, res, next) => {
  await check('name')
    .notEmpty()
    .withMessage('This field name cannot be empty')
    .run(req);
  await check('content')
    .notEmpty()
    .withMessage('This field content cannot be empty')
    .run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(BadRequest).json({
      ok: false,
      errors: errors.mapped()
    });
  };

  next();
}

module.exports = { updateValidator };
