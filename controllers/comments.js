const commentsService = require('../services/comments');
const { Created } = require('../utils/status');

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

module.exports = { create }