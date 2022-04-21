const { updateCommentById } = require('../services/comments');
const { OK } = require('../utils/status');

const updateComments = async (req, res, next) => {
  try {
    const body = req.body;

    const { id } = req.params;

    const result = await updateCommentById(id, body);

    res.status(OK).json({
      data: result
    })
  } catch (error) {
    next(error);
  }
};

module.exports = { updateComments }
