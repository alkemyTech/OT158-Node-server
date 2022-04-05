const testimonialsService = require('../services/testimonials');

const create = async (req, res, next) => {
	try {
		const data = await testimonialsService.create(req.body);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = { create };
