const commentsRepository = require('../repositories/comments');
const { throwError } = require('../utils/errorHandler');
const { Forbidden, NotFound, ISError } = require('../utils/status');
const newsRepository = require('../repositories/news');
const usersRepository = require('../repositories/users');

const updateCommentById = async (id, body) => {
  try {
    const comment = await commentsRepository.getCommentById({ where: { id } });

    if (comment) {
      const updateStatus = await comment.update(body);

      if (!updateStatus) {
        throwError('Bad Request', Forbidden);
      }

      return updateStatus;
    } else {
      throwError('Record not found', NotFound);
    }

  } catch (error) {
    throwError(error.message, ISError);
  }
};

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
    throwError(error.message, ISError);
  }
};

const create = async(newComment)=>{
  try {
    const existingUser = await usersRepository.getById(newComment.user_id);

    if (!existingUser)
      throwError('User not valid', NotFound);

    const existingNew = await newsRepository.getById(newComment.news_id);

    if (!existingNew)
      throwError('New not valid', NotFound);

    newComment.post_id = newComment.news_id;

    return await commentsRepository.create(newComment);
  } catch (error) {
    throw error
  }

}

module.exports={ create, getCommentsByNew, updateCommentById };
