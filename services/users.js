const usersRepository = require('../repositories/users');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { NotFound, BadRequest } = require('../utils/status');
const { createToken } = require('../modules/auth');

const getAll = async () => {
  return await usersRepository.getAll();
};

const create = async (req) => {
  try{
    validationResult(req).throw();

    let user = { ...req.body };
    user.password = await bcrypt.hash(req.body.password, 12);

    const newUser = await usersRepository.create(user);
    const token = createToken(newUser)

    const result ={
      data: newUser,
      token:token
    }

    return result;
  }
  catch(error){
    throw error
  }
};

const update = async (id, data) => {
  try {
    const user = await usersRepository.getById(id);


    if (user) {
      const updatedUser = await usersRepository.update(id, data);

      if (!updatedUser) {
        const error = new Error('User not updated');
        error.status = BadRequest;
        throw error;
      }

      return updatedUser;
    } else {
      const error = new Error('User not found');
      error.status = NotFound;
      throw error;
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
    const error = new Error('User not found');
    error.status = NotFound;
    throw error;
  }
};

module.exports = { getAll, create, remove, update };
