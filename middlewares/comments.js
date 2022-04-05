const { check, validationResult } = require("express-validator");

const commentValidation = async (req, res, next) => {
  await check("news_id", "News id is required").notEmpty().run(req);
  await check("user_id", "User id is required").notEmpty().isEmail().run(req);
  await check("body", "Body is required").notEmpty().isEmail().run(req);

  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: result.mapped(),
    });
  }
  next();
};

module.exports = { commentValidation };