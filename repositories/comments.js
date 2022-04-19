const { Comments } = require('../models');

const getAll = async (comando) => {
  return await Comments.findAll(comando);
};

module.exports = { getAll };
