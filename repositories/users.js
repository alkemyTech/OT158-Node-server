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

const update = (id, data) => {
  return Users.update(data, { where: { id } });
}

const getById = (id) => {
  return Users.findByPk(id);
}

module.exports = {
  getAll,
  create,
  getById,
  update,
};
