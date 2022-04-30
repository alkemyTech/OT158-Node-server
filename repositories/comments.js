const { Comments } = require('../models');

const getAll = async (command) => {
  return await Comments.findAll(command);
};

const getCommentById = async (id) => await Comments.findOne(id);

const create = async(newComment)=>{
  return Comments.create(newComment);
}

<<<<<<< HEAD
const remove = async (id) => {
  return await Comments.destroy(id)
};

const getById = async (id) => {
  return await Comments.findByPK(id)
};


module.exports = { getAll, create, remove, getById };
=======
module.exports = { getAll, create, getCommentById };
>>>>>>> 7aa7a4ba895f39df97bcdc129a39b9fe20d3b0f4
