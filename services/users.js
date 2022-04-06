// const usersRepository = require('../repositories/users');
// const bcrypt = require('bcryptjs');
// const { validationResult } = require('express-validator');
// const res = require('express/lib/response');


// const getAll = async (req)  => {
//     const result = await usersRepository.getAll();
//     return result;
// }

// const create = async (req) => {

//     validationResult(req).throw();

//     let user = { ...req.body };
//     user.password = await bcrypt.hash(req.body.password, 12);

//     const result = await usersRepository.create(user);
//     return result;
// }

// module.exports = { getAll, create };

const usersRepository = require('../repositories/users');


const update = async (id, data) => {
  const users = await usersRepository.getById(id);
  if (users) {
    const updatedUser =
      await usersRepository.update(id, data);
    if (updatedUser) {
      return updatedUser
    } else {
      const error = new Error('User not updated');
    error.status = 400;
    throw error;
    }
  } else {
    const error = new Error('User not found');
    error.status = 404;
    throw error;
  }
};
module.exports = { update };
