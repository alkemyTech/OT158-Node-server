const organizationsRepository = require('../repositories/organizations')
const getAll = async (req)=>{
  const result = await organizationsRepository.getAll();
  return result
}
const getById = async (req)=>{
  const result = await organizationsRepository.getById();
  return result
}
const create = async (req)=>{
  const result = await organizationsRepository.create();
  return result
}
const update = async (req)=>{
  const result = await organizationsRepository.update();
  return result
}
const remove = async ()=>{
  const result = await organizationsRepository.remove();
  return result
}

module.exports={
  getAll,
  getById,
  create,
  update,
  remove
}