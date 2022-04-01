const { roleAdmin } = require('./config/config');

const adminValidator = async (req, res, next) => {
  try {
    if (req.user.roleId === process.env.DB_ROLE) {
      next();
    } else {
      return res.status(403).json({ error: "Admin role required" });
    }
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = { adminValidator };



// function checkAdminRole(req, res, next) {
//   const user = req.user;
//   if (user.role === 'Admin') {
//     next();
//   } else {
//     next(
//       boom.unauthorized(
//         'Unauthorized!You cannot do this, Admins have been notified'
//       )
//     );
//   }
// }
