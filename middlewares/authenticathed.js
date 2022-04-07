const { verifyToken } = require('../modules/auth');
const usersRepository = require('../repositories/users');

const authenticathed = async (req, res, next) => {
  try {
    const authorization = req.get('authoriazation');
    const payload = verifyToken(authorization);
    if (!payload) throwError('Invalid token!', 500);
    const user = await usersRepository.getById(payload.id);
    if (!user || user.roleId !== payload.roleId)
      throwError('User non existent!', 403);
    populateUserData(payload, req);
    next();
  } catch (error) {
    next(error);
  }
};
const populateUserData = (user, target) => {
  target.user = user;
  return target;
};
const throwError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

module.exports = { authenticathed };
