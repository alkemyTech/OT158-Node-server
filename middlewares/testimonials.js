const { check, validationResult } = require('express-validator');
const { BadRequest } = require('../utils/status');

const testimonialsValidator = async (req, res, next) => {
	try {
		await check('name', 'Name is required').exists().notEmpty().run(req);
	await check('content', 'Content is required').exists().notEmpty().isEmail().run(req);

	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(BadRequest).json({
			ok: false,
			errors: result.mapped()
		});
	}

	next();
	} catch (error) {
		res.status(BadRequest).json(error)
	}
};

module.exports = { testimonialsValidator };