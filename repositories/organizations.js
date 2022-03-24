const db = require('../models/index')

const getAll = async ()=>{
  const result = await db.Organization.findAll();
  return result
}
const create = async (organization)=>{
  const result = await db.Organization.create(organization);
  return result
}
const update = async (organization,options)=>{
  const result = await db.Organization.update(organization,options);
  return result
}
const remove = async (options)=>{
  const result = await db.Organization.update({isDeleted:true},options);
  return result
}

module.exports={
  getAll,
  create,
  update,
  remove
}