const testimonialsRepo = require('../repositories/testimonials');

const create = async (body) => {
	return await testimonialsRepo.create(body);
};

module.exports = { create };
