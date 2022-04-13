const { Slides } = require('../models');

const create = async (slide) => {
  return await Slides.create(slide);

};

const getById = async (slideId) => {
  return await Slides.findOne(slideId);
};

const update = async (id, body) => {
  return await Slides.update(id, body);
}

module.exports = { create, getById, update };
