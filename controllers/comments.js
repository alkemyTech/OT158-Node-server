const commentsService = require('../services/comments')

const create= async (req,res,next)=>{
  try {
    const newComment = req.body;
    const data = await commentsService.create({newComment});
    res.status(201).json({data})
  } catch (error) {
    next(error)
  }
}

module.exports = {create}