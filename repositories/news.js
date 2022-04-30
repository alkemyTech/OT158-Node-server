const { News } = require('../models');

const getAll = (options) => {
  return News.findAndCountAll({
    limit: options.limit,
    offset: options.offset
  });
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

const remove = async (id) => await News.destroy(id);

module.exports = {
  getAll,
  create,
  update,
  getById,
  remove
};
