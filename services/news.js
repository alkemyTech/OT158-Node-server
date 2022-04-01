const newsRepository = require('../repositories/news');

const getAll = async () => {
  const result = await newsRepository.getAll();
  return result;
};
const create = async ({ body }) => {
  body.type = 'news';
  const result = await newsRepository.create(body);
  return result;
};
module.exports = {
  getAll,
  create
};
