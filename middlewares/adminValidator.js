const adminValidator = async (req, res, next) => {
  try {
    if (req.user.roleId === 1) {
      next();
    } else {
      return res.status(403).json({ error: "Admin role required" });
    }
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = { adminValidator };
