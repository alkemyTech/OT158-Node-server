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

const update = async (id, data) => {
  const result = await Users.update(data, { where: { id: id } })
  return result
}

const getById = async (id) => {
  const result = await Users.findByPk(id)
  return result
}

module.exports = {
  getAll,
  create,
  getById,
  update,
};




