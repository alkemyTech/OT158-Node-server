const { verifyToken } = require('../modules/auth');
const { roleAdmin } = require('../config/config').development;
const { Unauthorized, Forbidden } = require('../utils/status')
const { throwError } = require('../utils/errorHandler')

const ownershipValidator = (req, res, next) => {
  const authorization = req.get('authorization');

  const token = tokenExtraction(authorization);

  const { id } = req.params;

  if (!authorization) throwError('No token provided', Unauthorized);

  try {
    const decoded = verifyToken(token);

    req.userId = decoded.userId.toString();

    req.roleId = decoded.roleId?.toString();

    if (req.roleId && req.roleId === roleAdmin?.toString()) {
      return next();
    };

    if (req.userId !== id.toString()) {
      throwError('Invalid token!', Forbidden);
    };

    next();

  } catch (err) {
    next(err);
  };
};

const tokenExtraction = (auth) => {
  return auth?.substring(7)
};

module.exports = { ownershipValidator };
