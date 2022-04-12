const { Slides } = require('../models')

const create = async (slide) => {
    let result = await Slides.create(slide);
    return result;
}

const remove = async (userId) => {
  return await Slides.destroy({ where: { id: userId } });
};

const getById = async (id) => {
  return await Slides.findByPk(id);
};
module.exports = { create, remove, getById };
