const commentsRepository  = require('../repositories/comments');
const { NotFound, Forbidden } = require('../utils/status');
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

const removeComment = async (req) => {
  const { id } = req.params;
  const comment = await commentsRepository.getById(id);

  if (comment.user_id === req.user.userId)
    throwError('Not allowed to perform this action', Forbidden);

  return await commentsRepository.remove(id);
} 

module.exports = { getCommentsByNew, removeComment};
