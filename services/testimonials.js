const testimonialsRepo = require('../repositories/testimonials');

const create = async (body) => {
	const data = await testimonialsRepo.create(body);
	return data;
};

module.exports = { create };
