const usersRepository = require('../repositories/users');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { NotFound, BadRequest, ISError } = require('../utils/status');
const { throwError } = require('../utils/errorHandler');

const getAll = async () => {
  return await usersRepository.getAll();
};

const create = async (req) => {
  validationResult(req).throw();

  let user = { ...req.body };
  user.password = await bcrypt.hash(req.body.password, 12);

  const result = await usersRepository.create(user);
  return result;
};

const update = async (id, data) => {
  try {
    const user = await usersRepository.getById(id);


    if (user) {
      const updatedUser = await usersRepository.update(id, data);

      if (!updatedUser) {
        throwError('User not updated', BadRequest);
      }

      return updatedUser;
    } else {
      throwError('User not found', NotFound);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const remove = async (id) => {
  const user = await usersRepository.getById(id);

  if (user) {
    return await usersRepository.remove(id);
  } else {
    throwError('User not found', NotFound);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await usersRepository.getUserByEmail({ where: { email } });

    if(!user){
      throwError('User not found', NotFound);
    }

    return user

  } catch (error) {
    throwError(error.message, ISError);
  }
};

module.exports = { getAll, create, remove, update, getUserByEmail };
