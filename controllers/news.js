const newsService = require('../services/news');
const { OK, Created } = require('../utils/status');

const getAll = async (req, res, next) => {
  try {
    const allNews = await newsService.getAll(req);
    res.status(OK).json({ data: allNews });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const createdNew = await newsService.create(req);
    res.status(Created).json({ data: createdNew });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAll,
  create
};
