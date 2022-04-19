const { Comments } = require('../models');

const getAll = async (comando) => {
  return await Comments.findAll(comando);
};

const getById = async (commentId) =>{
  return await Comments.findByPk(commentId)
}

module.exports = { getAll, getById };
