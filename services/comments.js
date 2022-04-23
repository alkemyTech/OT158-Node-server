const usersRepository = require('../repositories/users');
const newsRepository = require('../repositories/news');
const commentsRepository = require('../repositories/comments');
const { throwError } = require('../utils/errorHandler');
const { NotFound } = require('../utils/status');

const create = async(newComment)=>{
  const existingUser = await usersRepository.getById(newComment.user_id);

  if (!existingUser)
    throwError('User not valid', NotFound);

  const existingNew = await newsRepository.getById(newComment.news_id);

  if (!existingNew)
    throwError('New not valid', NotFound);

  return await commentsRepository.create(newComment);
  
}

module.exports={ create };