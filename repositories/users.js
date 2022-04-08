const {
  Users
} = require('../models')

const getAll = async () => {
  return await Users.findAll();
}

const create = async (user) => {
  let result = await Users.create(user);
  return result;
}

const remove = async (UserId) =>{
  return await Users.destroy({ where:{ id : UserId } })
}

const getById = async(id)=>{
  const result = await Users.findByPk(id)
  return result
}

module.exports = {
  getAll,
  getById,
  create,
  remove
};
