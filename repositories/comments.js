const { Comments } = require('../models');

const getAll = async (comand) => {
  return await Comments.findAll(comand);
};

module.exports = { getAll };
