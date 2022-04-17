const { Slides } = require('../models');

const create = async (slide) => {
  return await Slides.create(slide);
};
const remove = async (userId) => {
  return await Slides.destroy({ where: { id: userId } });
};

const getById = async (id) => {
  return await Slides.findByPk(id);
};

const getAll = async () => {
  return await Slides.findAll({
    attributes: ['order', 'imageUrl'],
  });
}

module.exports = { create, remove, getById, getAll };
