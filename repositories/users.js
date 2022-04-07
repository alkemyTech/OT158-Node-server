const {
  Users
} = require('../models')

const getAll = async () => {
  const result = await Users.findAll();
  return result;
}

const create = async (user) => {
  let result = await Users.create(user);
  return result;
}

const remove = async (id) =>{
  let result = await Users.destroy({where:{id:id}})
  return result
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
