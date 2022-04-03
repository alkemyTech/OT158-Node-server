const adminValidator = async (req, res, next) => {
  const { roleId } = req.data;
  try {
    if (roleId === '1') {
      next();
    } else {
      return res
        .status(403)
        .json({ error: 'Admin role required' });
    }
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = { adminValidator };
