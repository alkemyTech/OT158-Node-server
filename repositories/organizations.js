const {Organizations} = require('../models')

const getAll = async ()=>{
  const result = await Organizations.findAll();
  return result
}
const getById = async (id)=>{
  const result = await Organizations.findByPk(id);
  return result
}
const create = async (organization)=>{
  const result = await Organizations.create(organization);
  return result
}
const update = async (organization,options)=>{
  const result = await Organizations.update(organization,options);
  return result
}
const remove = async (options)=>{
  const result = await Organizations.destroy(options);
  return result
}

module.exports={
  getAll,
  getById,
  create,
  update,
  remove
}