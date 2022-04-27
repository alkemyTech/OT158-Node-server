const { check, validationResult } = require("express-validator")


module.exports = {
    creationValidation: async (req, res, next) => {
        await check("body", "This field cannot be empty").notEmpty().run(req);
        await check("user_id", "This field must be a integer").isDecimal().run(req);
        await check("news_id", "This field must be a integer").isDecimal().run(req);

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            });
        }

        next();
    }
}