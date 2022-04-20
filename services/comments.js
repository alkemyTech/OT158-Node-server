const { getAllCommnets } = require('../repositories/comments');
const { throwError } = require('../utils/errorHandler');
const { NotFound } = require('../utils/status');

const getAllCommentsByCreationDate = async () => {
  try {
    return await getAllCommnets({
      order: [['createdAt', 'ASC']],
      attributes: ['body']
    });
  } catch (error) {
    throwError('Not found comments', NotFound);
  }
};

module.exports = { getAllCommentsByCreationDate };
