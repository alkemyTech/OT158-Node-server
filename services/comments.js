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

const checkOwnershipUser = (user, id)=>{
  return user.id === id;
}

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

module.exports={ create, getCommentsByNew, updateCommentById, getAllComments };
const removeComment = async (req) => {
  try {
    const { id } = req.params;
    const comment = await commentsRepository.getById(id);

    if(!checkOwnershipUser(req.user, comment.user_id))
      throwError("User not allowed to perform this action",Forbidden);

    return await commentsRepository.remove(id);
  } catch (error) {
    throw error;
  }
}

module.exports={ create, getCommentsByNew, updateCommentById, removeComment, getAllComments };
