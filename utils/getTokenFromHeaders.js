const { Unauthorized } = require('./status')
const { throwError } = require('./errorHandler')

const getTokenFromHeaders = (req) => {
  const authorization = req.get('authorization') || req.headers['authorization'];

  if (!authorization) {
    throwError('No token provided', Unauthorized);
  }

  const tokenFormatting = authorization.substring(7);

  return tokenFormatting;
};

module.exports = { getTokenFromHeaders };
