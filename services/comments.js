const { getCommentById } = require('../repositories/comments');
const { throwError } = require('../utils/errorHandler');
const { Forbidden, NotFound, ISError } = require('../utils/status');

const updateCommentById = async (id, body) => {
  try {
    const comment = await getCommentById({ where: { id } });

    if (comment) {
      const updateStatus = await comment.update(body);

      if (!updateStatus) {
        throwError('Bad Request', Forbidden);
      }

      return updateStatus;
    } else {
      throwError('Record not found', NotFound);
    }

  } catch (error) {
    throwError(error.message, ISError);
  }
};

module.exports = { updateCommentById };
