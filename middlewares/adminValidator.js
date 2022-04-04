const { verifyToken } = require('../modules/auth');
const { roleId } = require('../config/config');

const adminValidator = (req, res, next) => {
  const token = req.headers['Authorization'];

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: 'No token provided'
    })
  }

  try {
    const decoded = verifyToken(token);

    req.roleID = decoded.roleId

    if (req.roleId !== roleId) {
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

module.exports = adminValidator;
