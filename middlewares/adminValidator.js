const { verifyToken } = require('../modules/auth');

const adminValidator = (req, res, next) => {
  const token = req.headers['Authorization'];

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: 'No token provided'
    });
  }

  try {
    const decoded = verifyToken(token);

    req.roleId = decoded.roleId;

    if (req.roleId === process.env.ROLE_ADMIN) {
      return next();
    } else {
      return res.status(403).json({
        auth: false,
        message: 'You need administrator permissions'
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = adminValidator;
