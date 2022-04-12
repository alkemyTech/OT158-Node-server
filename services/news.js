const newsRepository = require('../repositories/news')

const create =async({body})=>{
  body.type="news"
  const result = await newsRepository.create(body)
  return result
}

const remove = async id => {
  const newToRemove = await newsRepository.getById(id);
  if (!newToRemove) throw new Error('Bad request!');

  return await newsRepository.remove(id);
};

module.exports={
  create,
  remove
}