const newsService = require('../services/news');

const getAll = async (req, res, next) => {
  try {
    const allNews = await newsService.getAll(req);
    res.status(200).json({ data: allNews });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const createdNew = await newsService.create(req);
    res.status(200).json({ data: createdNew });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAll,
  create
};
