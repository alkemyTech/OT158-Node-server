const { Comments } = require('../models');

const getAll = async (command) => {
  return await Comments.findAll(command);
};

const getCommentById = async (id) => await Comments.findOne(id);

const create = async(newComment)=>{
  return Comments.create(newComment);
}

module.exports = { getAll, create, getCommentById };
