const { verifyToken } = require('../modules/auth');
const { roleId } = require('../config/config')

const ownershipValidator = (req, res, next) => {
  const token = req.headers['Authorization'];

  const { id } = req.params;

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: 'No token provided'
    })
  }

  try {
    const decoded = verifyToken(token);
    req.userId = decoded.userId
    req.roleId = decoded.roleId

    if (decoded.roleId == roleId) {
      return next()
    }

    if (decoded.userId != id) {
      return res.status(403).json({
        auth: false,
        message: 'Invalid token'
      })
    }
  } catch (err) {
    next(err)
  }
  next()
}

module.exports = { ownershipValidator };
