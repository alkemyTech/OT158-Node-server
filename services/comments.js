const commentsRepository  = require('../repositories/comments');
const { NotFound } = require('../utils/status');
const { throwError } = require('../utils/errorHandler');
const newsRepository = require('../repositories/news');

const getCommentsByNew = async (req) => {
  const newId = req.params.id
  const condition = {where: {post_id: newId}}
  try{
    const news = await newsRepository.getById(newId)
    if(!news){
      throwError("New not Found", NotFound)
    }
    return await commentsRepository.getAll(condition);
  }
  catch(error){
    throw error
  }
};

module.exports = { getCommentsByNew };
