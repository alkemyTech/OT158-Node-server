const jwt = require('jsonwebtoken');
const { secretToken } = require('../config/config').development;
const { Unauthorized } = require('../utils/status');
const { throwError } = require('../utils/errorHandler');

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
  return jwt.verify(token, secretToken);
};

const getTokenFromHeaders = (req) => {
  const authorization = req.get('authorization') || req.headers['authorization'];

  if (!authorization) {
    throwError('No token provided', Unauthorized);
  }

  const tokenFormatting = authorization.substring(7);

  return tokenFormatting;
};

module.exports = { createToken, verifyToken, getTokenFromHeaders };
