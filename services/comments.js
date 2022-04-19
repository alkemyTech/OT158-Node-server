const { getAll } = require('../repositories/comments');
const { NotFound } = require('../utils/status');
const { throwError } = require('../utils/errorHandler');
const { getById } = require('../repositories/news');

const getAllComments = async (req) => {
  const { id } = req.params
  const condition = {where: {post_id: id}}
  try{
    const news = await getById(id)
    if(!news){
      throwError("New not Found", NotFound)
    }
    return await getAll(condition);
  }
  catch(error){
    throw error
  }
};

module.exports = { getAllComments };
