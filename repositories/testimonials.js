const { Testimonials } = require('../models');

const create = async (body) => {
	const data = await Testimonials.create(body);
	return data;
};

module.exports = { create };
