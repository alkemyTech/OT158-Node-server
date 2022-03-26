const newsRepository = require('../repositories/news')

const getAll =async(req)=>{
  const result = await newsRepository.getAll()
  return result
}
const getById =async(req)=>{
  const result = await newsRepository.getById()
  return result
}
const create =async(req)=>{
  const result = await newsRepository.create()
  return result
}
const update =async(req)=>{
  const result = await newsRepository.update()
  return result
}
const remove =async(req)=>{
  const result = await newsRepository.remove()
  return result
}

module.exports={
  getAll,
  getById,
  create,
  update,
  remove
}