const commentsRepository  = require('../repositories/comments');
const { NotFound, ISError } = require('../utils/status');
const { throwError } = require('../utils/errorHandler');
const newsRepository = require('../repositories/news');

const getCommentsByNew = async (req) => {
  const newId = req.params.id;

  const condition = {where: {post_id: newId}};

  try{
    const news = await newsRepository.getById(newId)
    if(!news){
      throwError("News not Found", NotFound);
    }
    return await commentsRepository.getAllComments(condition);
  }
  catch(error){
    throwError(error.message, ISError);
  }
};

const getAllComments = async (query) => {
  try {
    return await commentsRepository.getAllComments(CONDITIONS[query] ? CONDITIONS[query]() : null);
  } catch (error) {
    throwError(error.message, ISError);
  }
};

const CONDITIONS = {
  'order': (query) => {
    return {
      order: [['createdAt', query]],
      attributes: ['body']
    }
  }

}

module.exports = { getCommentsByNew, getAllComments };
