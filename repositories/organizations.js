const db = require('../models/index')

const getAll = async ()=>{
  const result = await db.Organizations.findAll();
  return result
}
const create = async (organization)=>{
  const result = await db.Organizations.create(organization);
  return result
}
const update = async (organization,options)=>{
  const result = await db.Organizations.update(organization,options);
  return result
}
const remove = async (options)=>{
  const result = await db.Organizations.update({isDeleted:true},options);
  return result
}

module.exports={
  getAll,
  create,
  update,
  remove
}