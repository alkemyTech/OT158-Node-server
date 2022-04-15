const { Testimonials } = require('../models');

const create = async (body) => {
	return await Testimonials.create(body);
};

module.exports = { create };
