const { check, validationResult } = require('express-validator');

const testimonialsValidator = async (req, res, next) => {
	await check('name', 'Name is required').exists().notEmpty().run(req);
	await check('content', 'Content is required').exists().notEmpty().isEmail().run(req);

	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).json({
			ok: false,
			errors: result.mapped()
		});
	}

	next();
};

module.exports = { testimonialsValidator };
