const { Comments } = require('../models');

const getAll = async (command) => {
  return await Comments.findAll(command);
};

const getCommentById = async (id) => await Comments.findOne(id);

module.exports = { getAll, getCommentById };
