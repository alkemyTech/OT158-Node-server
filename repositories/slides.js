const { Slides } = require('../models');

const create = async (slide) => {
  return await Slides.create(slide);

};

const getById = async (slideId) => {
  return await Slides.findByPk(slideId);
};

const getAll = async () => {
  const queryResult = await Slides.findAll({
    attributes: ['order', 'imageUrl'],
  });
  return queryResult;
}

module.exports = {
  create,
  getById,
  getAll,
};
