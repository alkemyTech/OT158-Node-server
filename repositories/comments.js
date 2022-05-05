const { Comments } = require('../models');

const getAllComments = async (params) => await Comments.findAll(params);

const getCommentById = async (id) => await Comments.findOne(id);

const create = async(newComment)=>{
  return Comments.create(newComment);
}

const remove = async (id) => {
  return await Comments.destroy(id)
};

module.exports = { create, getCommentById, remove, getAllComments };
