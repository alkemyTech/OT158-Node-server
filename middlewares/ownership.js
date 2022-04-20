const { verifyToken } = require('../modules/auth');
const { roleAdmin } = require('../config/config').development;
const { Unauthorized, Forbidden } = require('../utils/status');
const { throwError } = require('../utils/errorHandler');

const ownershipValidator = async (req, res, next) => {
  const { id } = req.params;

  try {
    const token = getTokenFromHeaders();

    const decoded = verifyToken(token);

    req.userData = {
      userId: decoded.userId.toString(),
      roleId: decoded.roleId?.toString()
    };

    if (
      req.userData.roleId &&
      req.userData.roleId === roleAdmin?.toString()
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

const getTokenFromHeaders = (req) => {
  const authorization = req.get('authorization');

  if (!authorization) {
    throwError('No token provided', Unauthorized);
  }

  const tokenFormatting = authorization.substring(7);

  return tokenFormatting;
};

module.exports = { ownershipValidator };
