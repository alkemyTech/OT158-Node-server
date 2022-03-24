const newsRepository = require('../repositories/news')

const getAll =async({params})=>{
  const result = await newsRepository.getAll()
  return result
}
const create =async({body})=>{
  const result = await newsRepository.create(body)
  return result
}
const update =async({body,params})=>{
  const {id}=params;
  const where = {id};
  const result = await newsRepository.update(body,where)
  return result
}
const remove =async({params})=>{
  const {id}=params;
  const where = {id};
  const result = await newsRepository.remove(where)
  return result
}

module.exports={
  getAll,
  create,
  update,
  remove
}