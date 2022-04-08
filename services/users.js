const usersRepository = require('../repositories/users');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const res = require('express/lib/response');
const { NotFound, BadRequest } = require('../utils/status');

const getAll = () => {
  return usersRepository.getAll();
};

const create = async (req) => {
  validationResult(req).throw();

  let user = { ...req.body };
  user.password = await bcrypt.hash(req.body.password, 12);

  const result = await usersRepository.create(user);
  return result;
};

const update = async (id, data) => {
  const user = await usersRepository.getById(id);

  if (user) {
    const updatedUser = await usersRepository.update( id, data);

    if (updatedUser) {

      return updatedUser;

    } else {
      const error = new Error('User not updated');
      error.status = BadRequest;
      throw error;
    }

  } else {
    const error = new Error('User not found');
    error.status = NotFound;
    throw error;
  }
};

module.exports = { getAll, create, update };
