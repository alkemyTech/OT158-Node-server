const { Slides } = require ('../models')

const create = async (slide) => {
    let result = await Slides.create(slide);
    return result;
}

const getById = async (slideId) => {
  let result = await Slides.findByPk(slideId)
  return result
}

module.exports = { create, getById };
