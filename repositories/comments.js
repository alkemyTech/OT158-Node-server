const { Comments } = require('../models');

const getAll = async (command) => {
  return await Comments.findAll(command);
};

const create = async(newComment)=>{
  return Comments.create(newComment);
}

const remove = async (id) => {
  return await Comments.destroy(id)
};

const getById = async (id) => {
  return await Comments.findByPK(id)
};


module.exports = { getAll, create, remove, getById };
