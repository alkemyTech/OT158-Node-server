const { check, validationResult } = require("express-validator");

const contactValidation = async (req, res, next) => {
  await check("name", "Name is required").notEmpty().run(req);
  await check("email", "Email is required").notEmpty().isEmail().run(req);

  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: result.mapped(),
    });
  }
  next();
};

module.exports = { contactValidation };
