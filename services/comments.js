const commentsRepository  = require('../repositories/comments');
const usersRepository = require('../repositories/users');
const newsRepository = require('../repositories/news');
const { NotFound } = require('../utils/status');
const { throwError } = require('../utils/errorHandler');

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

module.exports={ create, getCommentsByNew };
