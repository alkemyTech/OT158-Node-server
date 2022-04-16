const { Users } = require('../models');

const getAll = async () => {
  return await Users.findAll();
};

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

module.exports = { getAll, getById, create, remove, update };
