<<<<<<< HEAD
const { Users } = require('../models');

const getAll = async () => {
  return await Users.findAll();
};
=======
const model = require('../models/users')


const getAll = async () => {
  const result = [];
  return result;
}
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

const create = async (user) => {
  return await Users.create(user);
};

const remove = async (userId) => {
  return await Users.destroy({ where: { id: userId } });
};

const getById = async (id) => {
  return await Users.findByPk(id);
};

const update = (id, data) => {
  return Users.update(data, { where: { id } });
};

const getUserByEmail = async (email) => await Users.findOne(email);

module.exports = { getAll, getById, create, remove, update, getUserByEmail };
