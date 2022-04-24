const commentsService = require('../services/comments');
const { OK } = require('../utils/status');

const getCommentsByNew = async (req, res, next) => {
  try {
    const result = await commentsService.getCommentsByNew(req);
    res.status(OK).json({
      meta: {
        status: OK,
        total: result.length,
      },
      data: result
    });
  } catch (error) {
    next(error)
  }
};

const getAllCommnets = async (req,res, next) => {
  try {
    const result = await commentsService.getAllCommentsByCreationDate();

    res.status(OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
};
module.exports = { getCommentsByNew, getAllCommnets };
