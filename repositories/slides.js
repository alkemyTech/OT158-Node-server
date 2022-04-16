const { Slides } = require('../models');

const create = async (slide) => {
  return await Slides.create(slide);

};

const getById = async (slideId) => {
  return await Slides.findByPk(slideId);
};

const getAll = async () => {
  return await Slides.findAll({
    attributes: ['order', 'imageUrl'],
  });
}

module.exports = {
  create,
  getById,
  getAll,
};
