const newsRepository = require('../repositories/news');

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
