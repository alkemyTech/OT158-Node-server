const { Comments } = require('../models');

const getAll = async (command) => {
  return await Comments.findAll(command);
};

const remove = async (id) => {
  return await Comments.destroy(id)
};

const getById = async (id) => {
  return await Comments.findByPK(id)
};

module.exports = { getAll, remove, getById};
