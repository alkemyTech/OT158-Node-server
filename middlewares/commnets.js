const { verifyToken } = require('../modules/auth');
const { throwError } = require('../utils/errorHandler');
const { roleAdmin } = require('../config/config').development;
const { getCommentById } = require('../repositories/comments');
const { NotFound, Unauthorized } = require('../utils/status');
const { getTokenFromHeaders } = require('../utils/getTokenFromHeaders');

const updateCommentsValidator = async (req, res, next) => {
  try {
    const comment = await getCommentById({ where: { id: req.params.id } });

    if(!comment){
      throwError('Not Found', NotFound);
    }

    const token = getTokenFromHeaders(req);

    const decoded = verifyToken(token);

    const userInfo = {
      userId: decoded.userId,
      roleId: decoded.roleId
    };

    if(userInfo.roleId && userInfo.roleId.toString() === roleAdmin){
      next()
    }else if(userInfo.userId === comment.userId){
      next()
    }else {
      throwError('This comment is not yours', Unauthorized)
    }

  } catch (error) {
    next(error)
  }
};

module.exports = { updateCommentsValidator }
