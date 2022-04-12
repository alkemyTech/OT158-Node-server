const {
  Slides
} = require('../models')

const create = async (slide) => {
  let result = await Slides.create(slide);
  return result;
}

const getById = async (slideId) => {
  return await Slides.findByPk(slideId);
};

const getAll = async () => {
  let result = await Slides.findAll({
    attributes: [
      'order', 'imageUrl',
    ]
  });
  return result;
}

module.exports = {
  create,
  getAll,
  getById,
};
