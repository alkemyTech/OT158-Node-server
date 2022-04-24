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
    return await commentsRepository.getAllCommnets(condition);
  }
  catch(error){
    throwError(error.message, ISError);
  }
};

const getAllCommentsByCreationDate = async () => {
  try {
    return await commentsRepository.getAllCommnets({
      order: [['createdAt', 'ASC']],
      attributes: ['body']
    });
  } catch (error) {
    throwError(error.message, ISError);
  }
};

module.exports = { getCommentsByNew, getAllCommentsByCreationDate };
