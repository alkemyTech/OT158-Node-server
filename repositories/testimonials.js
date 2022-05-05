const { Testimonials } = require('../models');

const getAll = async (conditions) =>{
  return await Testimonials.findAll(conditions);
}

const create = async (body) => {
  return await Testimonials.create(body);
};

const getById = async (id) => {
  return await Testimonials.findByPk(id);
};

const update = async (id, changes) => {
  return await Testimonials.update(changes, {
    where: { id }
  });
};

const remove = async (id) => await Testimonials.destroy(id);

module.exports = {
	create,
	getById,
	update,
  getAll,
  remove
};
