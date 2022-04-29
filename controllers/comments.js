const commentsService = require('../services/comments');
const { OK, Created } = require('../utils/status');

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

const updateComments = async (req, res, next) => {
  try {
    const body = req.body;

    const { id } = req.params;

    const result = await commentsService.updateCommentById(id, body);

    res.status(OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
};

const create = async (req, res, next) => {
  try {
    const createdComment = await commentsService.create(req.body);

    res.status(Created).json({
      data: createdComment
    });
  } catch (error) {
    next(error)
  }
}
module.exports = { getCommentsByNew, create, updateComments, getAllCommnets }
