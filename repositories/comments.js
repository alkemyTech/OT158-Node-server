const {Comments }= require('../models');

const create = async(newComment)=>{
  return Comments.create(newComment);
}

module.exports = { create };