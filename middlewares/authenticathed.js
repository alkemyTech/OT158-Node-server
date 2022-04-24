const { verifyToken } = require('../modules/auth');
const usersRepository = require('../repositories/users');
const {
  Forbidden,
  Unauthorized
} = require('../utils/status');
const { throwError } = require('../utils/errorHandler');

const authenticathed = async (req, res, next) => {
  try {
    const authorization = req.get('authorization');

    if (!authorization)
      throwError('Token non existent!', Unauthorized);

    const payload = verifyToken(authorization);
    const user = await usersRepository.getById(
      payload.userId
    );

    if (!user || user.roleId !== payload.roleId)
      throwError('User non existent!', Forbidden);

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

module.exports = { authenticathed };
