const db = require('../models/index')
const getAll= async(options)=>{
  const result = await db.New.findAll(options)
  return result
}
const create= async(news,options)=>{
  const result = await db.New.create(news,options)
  return result
}
const update= async(news,options)=>{
  const result = await db.New.update(news,options)
  return result
}
const remove= async(options)=>{
  const result = await db.New.update({isDeleted:true},options)
  return result
}

module.exports={
  getAll,
  create,
  update,
  remove
}