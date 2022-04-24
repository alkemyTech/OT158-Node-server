<<<<<<< HEAD
const {Comments }= require('../models');

const create = async(newComment)=>{
  return Comments.create(newComment);
}

module.exports = { create };
=======
const { Comments } = require('../models');

const getAll = async (command) => {
  return await Comments.findAll(command);
};

module.exports = { getAll };
>>>>>>> 595ea67283f36f2c4547b57f74c47e7331f60256
