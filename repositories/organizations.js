const {Organizations} = require('../models')

const getAll = async ()=>{
  const result = await Organizations.findAll();
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
  const result = await Organizations.update({isDeleted:true},options);
  return result
}

module.exports={
  getAll,
  create,
  update,
  remove
}