const { getAllCommentsByCreationDate } = require('../services/comments');
const { OK } = require('../utils/status');

const getAllCommnets = async (req,res, next) => {
  try {
    const result = await getAllCommentsByCreationDate();

    res.status(OK).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
};

module.exports = { getAllCommnets }
