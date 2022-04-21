const newsRepository = require('../repositories/news');

const getAll = async (req) => {
  try {

  const {page} = req.query;
  const {LIMIT} = 10;
  const {offset} = page? (+page*LIMIT) - LIMIT : 0;
  const {count, rows} = await newsRepository.getAll({limit: LIMIT, offset});

  const { nextPage, currentPage, prevPage, totalPages } = getPagination(req, count, page, LIMIT);

   return {
    data:rows,
    total:count,
    pagination: {
      pages:totalPages,
      current:currentPage,
      next:nextPage,
      prev:prevPage,
    }
  }
} catch (error) {

  }
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
