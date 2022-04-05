const {Comments} = require('../models');

const create = async ({newComment})=>{
  const result = await Comments.create(newComment);
  return result
}

module.exports = {create}