const { News } = require('../models');

const getAll = () => {
  return News.findAll();
};

const create = (body) => {
  return News.create(body);
};

const update = async (id, changes) => {
  return await News.update(changes,{
    where: {id},
  })
}

const getById = async (id) => {
  return await News.findByPk(id);
};

module.exports = {
  getAll,
  create,
  update,
  getById,
};
