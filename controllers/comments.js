const { getAllComments } = require('../services/comments');
const { BadRequest, OK } = require('../utils/status');

const getAll = async (req, res, next) => {
  try {
    const result = await getAllComments(req);
    res.status(OK).json({
      meta: {
        status: OK,
        total: result.length,
        url: ''
      },
      data: result
    });
  } catch (error) {
    next(error)
  }
};

module.exports = { getAll };
