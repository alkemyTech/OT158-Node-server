const testimonialsService = require('../services/testimonials');
const { BadRequest, OK } = require('../utils/status');

const create = async (req, res, next) => {
	try {
		const data = await testimonialsService.create(req.body);
		res.status(OK).json(data);
	} catch (error) {
		res.status(BadRequest).json(data);
	}
};

module.exports = { create };
