const {
  Users
} = require('../models')

const getAll = async () => {
  const result = [];
  return result;
}

const create = async (user) => {
  let result = await Users.create(user);
  return result;
}

module.exports = {
  getAll,
  create
};
