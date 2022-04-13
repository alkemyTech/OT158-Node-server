const newsRepository = require('../repositories/news');

<<<<<<< HEAD
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
=======
const getAll = () => {
  return newsRepository.getAll();
};
const create = ({ body }) => {
  body.type = 'news';
  return newsRepository.create(body);
};
module.exports = {
  getAll,
  create
};
>>>>>>> dev
