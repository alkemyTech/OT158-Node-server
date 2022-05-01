const { check, validationResult } = require("express-validator")
const { verifyToken, getTokenFromHeaders } = require('../modules/auth');
const { throwError } = require('../utils/errorHandler');
const { roleAdmin } = require('../config/config').development;
const { getCommentById } = require('../repositories/comments');
const { NotFound, Unauthorized } = require('../utils/status');

module.exports = {
    creationValidation: async (req, res, next) => {
        await check("body", "This field cannot be empty").notEmpty().run(req);
        await check("user_id", "This field must be a integer").isDecimal().run(req);
        await check("news_id", "This field must be a integer").isDecimal().run(req);

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            });
        }

        next();
    },
    updateCommentsValidator: async (req, res, next) => {
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
    }
}
