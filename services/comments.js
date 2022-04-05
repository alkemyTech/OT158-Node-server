const commentsRepository = require('../repositories/comments')

const create = async ({newComment})=>{
  const result = await commentsRepository.create({newComment})
  return result
}

module.exports = {create}