const {News} = require('../models')
const getAll= async()=>{
  const result = {result:true};
  return result
}
const getById= async()=>{
  const result = {result:true};
  return result
}
const create= async(body)=>{
  const result = News.create(body);
  return result
}
const update= async()=>{
  const result = {result:true};
  return result
}
const remove= async()=>{
  const result = {result:true};
  return result
}

module.exports={
  getAll,
  getById,
  create,
  update,
  remove
}