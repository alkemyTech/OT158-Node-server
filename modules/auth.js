const jwt = require('jsonwebtoken');
const { secretToken } = require(__dirname +
  '/../config/config').development;

const createToken = (userInfo) => {
  const payload = {
    userId: userInfo.id,
    roleId: userInfo.roleId
  };
  const options = {
    expiresIn: '24h'
  };

  return jwt.sign(payload, secretToken, options);
};

const verifyToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, secretToken);
    return decodedToken;
  } catch (error) {
    return;
  }
};

module.exports = { createToken, verifyToken };
