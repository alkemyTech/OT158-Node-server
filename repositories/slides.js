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
};

const update = async (id, body) => {
  return await Slides.update(body, {where: {id:id}});
}

module.exports = { create, getById, getAll, update };
