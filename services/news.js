const newsRepository = require('../repositories/news');

const getAll = () => {
  return newsRepository.getAll();
};
const create = ({ body }) => {
  body.type = 'news';
  return newsRepository.create(body);
};
const getById = (id)=>{
  return newsRepository.getById(id);
}
module.exports = {
  getAll,
  create,
  getById
};
