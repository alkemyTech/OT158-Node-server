const {
  check,
  validationResult
} = require('express-validator');

module.exports = {
  creationValidation: async (req, res, next) => {
    await check('name', 'This field cannot be empty')
      .notEmpty()
      .run(req);
    await check('name', 'This field must be a string')
      .isString()
      .run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: errors.mapped()
      });
    }

    next();
  }
};
