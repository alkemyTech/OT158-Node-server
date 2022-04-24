const { verifyToken } = require('../modules/auth');
const { roleAdmin } = require('../config/config').development;
const { Forbidden } = require('../utils/status');
const { throwError } = require('../utils/errorHandler');
const { getTokenFromHeaders } = require('../modules/auth');

const ownershipValidator = async (req, res, next) => {
  const { id } = req.params;

  try {
    const token = getTokenFromHeaders(req);

    const decoded = verifyToken(token);

    req.userData = {
      userId: decoded.userId.toString(),
      roleId: decoded.roleId?.toString()
    };

    if (
      req.userData.roleId &&
      req.userData.roleId === roleAdmin
    ) {
      return next();
    }

    if (req.userData.userId !== id.toString()) {
      throwError('Invalid token!', Forbidden);
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { ownershipValidator };
