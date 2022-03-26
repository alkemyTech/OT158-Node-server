const newsRepository = require('../repositories/news')

const create =async({body})=>{
  body.type="news"
  const result = await newsRepository.create(body)
  return result
}
module.exports={
  create
}