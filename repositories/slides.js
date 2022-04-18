const { Slides } = require('../models');

const create = async (slide) => {
  return await Slides.create(slide);
};
const remove = async (slideId) => {
  return await Slides.destroy({ where: { id: slideId } });
};

const getById = async (slideId) => {
  return await Slides.findByPk(slideId);
};

const getAll = async () => {
  return await Slides.findAll({
    attributes: ['order', 'imageUrl'],
  });
}

module.exports = { create, remove, getById, getAll };
