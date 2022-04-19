const { check, validationResult, body } = require('express-validator');
const { BadRequest } = require('../utils/status');

const testimonialsValidator = async (req, res, next) => {
	try {
		await check('name', 'Name is required').exists().notEmpty().run(req);
		await check('content', 'Content is required')
			.exists()
			.notEmpty()
			.isEmail()
			.run(req);

		const result = validationResult(req);

		if (!result.isEmpty()) {
			return res.status(BadRequest).json({
				ok: false,
				errors: result.mapped()
			});
		}

		next();
	} catch (error) {
		res.status(BadRequest).json(error);
	}
};

const validateUpdateForm = [

    body('name')
    .custom( value => (value || value == "")? value.trim().match(/^[A-Za-z ]+$/) : true),
    
    body('image')
    .custom( value => (value || value == "")? value.trim().length>3 : true),
    
    body('content')
    .custom( value => (value || value == "")? value.trim().match(/^[A-Za-z 0-9]+$/) : true),

]

module.exports = { testimonialsValidator, validateUpdateForm };
