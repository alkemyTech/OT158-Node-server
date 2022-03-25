const db = require('../models/index')
const getAll= async(options)=>{
  const result = await db.News.findAll(options)
  return result
}
const create= async(news,options)=>{
  const result = await db.News.create(news,options)
  return result
}
const update= async(news,options)=>{
  const result = await db.News.update(news,options)
  return result
}
const remove= async(options)=>{
  const result = await db.News.update({isDeleted:true},options)
  return result
}

module.exports={
  getAll,
  create,
  update,
  remove
}