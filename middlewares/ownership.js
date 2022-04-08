const { verifyToken } = require('../modules/auth');
const { roleAdmin } = require('../config/config').development;

const ownershipValidator = (req, res, next) => {
  const authorization = req.get('authorization');

  const token = authorization?.substring(7);

  const { id } = req.params;

  if (!authorization) {
    return res.status(401).json({
      auth: false,
      message: 'No token provided'
    });
  };

  try {
    const decoded = verifyToken(token);

    req.userId = decoded.userId.toString();

    req.roleId = decoded.roleId?.toString();

    if (req.roleId && req.roleId === roleAdmin?.toString()) {
      return next();
    };

    if (req.userId !== id.toString()) {
      return res.status(403).json({
        auth: false,
        message: 'Invalid token'
      });
    };
  } catch (err) {
    next(err);
  };
  next();
};

module.exports = { ownershipValidator };
