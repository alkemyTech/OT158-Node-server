const organizationsRepository = require('../repositories/organizations')
const getAll = async (req)=>{
  const result = await organizationsRepository.getAll();
  return result
}
const create = async ({body})=>{
  body.createdAt= new Date();
  body.updatedAt= new Date();
  const result = await organizationsRepository.create(body);
  return result
}
const update = async ({body,params})=>{
  const {id} = params;
  const options = {where:{id}}
  body.updatedAt= new Date();
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
  create,
  update,
  remove
}