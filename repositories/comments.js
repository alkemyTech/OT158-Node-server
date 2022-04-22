const { Comments } = require('../models');

const getAll = async (command) => {
  return await Comments.findAll(command);
};

module.exports = { getAll };
