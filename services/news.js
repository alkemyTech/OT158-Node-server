const newsRepository = require('../repositories/news');
const { throwError } = require('../utils/errorHandler');
const { NotFound } = require('../utils/status');

const getAll = () => {
  return newsRepository.getAll();
};
const create = ({ body }) => {
  body.type = 'news';
  return newsRepository.create(body);
};
const getById = (id)=>{
  return newsRepository.getById(id);
};

const deleteNews = async (id) => {
  try {
    const news = await newsRepository.getById(id);

    if (!news) {
      throwError('News not found', NotFound);
    }

    return await newsRepository.remove({
      where: { id }
    });
  } catch (error) {
    throwError('News not found', NotFound);
  }
};

module.exports = {
  getAll,
  create,
  getById,
  deleteNews
};
