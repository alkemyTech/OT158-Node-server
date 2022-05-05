const { verifyToken, getTokenFromHeaders } = require('../modules/auth');
const { Forbidden } = require('../utils/status');

const adminValidator = (req, res, next) => {
  try {
    const token = getTokenFromHeaders(req);

    const decoded = verifyToken(token);

    req.roleId = decoded.roleId;

    if (req.roleId.toString() === process.env.ROLE_ADMIN) {
      return next();
    } else {
      return res.status(Forbidden).json({
        auth: false,
        message: 'You need administrator permissions'
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { adminValidator };
