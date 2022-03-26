const organizationsRepository = require('../repositories/organizations')
const getAll = async (req)=>{
  const result = await organizationsRepository.getAll();
  return result
}
const getById = async ({params})=>{
  const {id} = params
  const result = await organizationsRepository.getById(id);
  return result
}
const create = async ({body})=>{
  const result = await organizationsRepository.create(body);
  return result
}
const update = async ({body,params})=>{
  const {id} = params;
  const options = {where:{id}}
  const result = await organizationsRepository.update(body,options);
  return result
}
const remove = async ({params})=>{
  const {id} = params;
  const options = {where:{id}}
  const result = await organizationsRepository.remove(options);
  return result
}

module.exports={
  getAll,
  getById,
  create,
  update,
  remove
}