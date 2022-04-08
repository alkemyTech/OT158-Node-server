const {
  Slides
} = require('../models')

const create = async (slide) => {
  let result = await Slides.create(slide);
  return result;
}

const getAll = async () => {
  let result = await Slides.findAll();
  return result;
}

module.exports = {
  create,
  getAll
};
