const { Users } = require('../models');

const getAll = () => {
  return Users.findAll();
};

const create = async (user) => {
  let result = await Users.create(user);
  return result;
};

module.exports = {
  getAll,
  create
};
