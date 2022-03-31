const newsService = require('../services/news')

const create = async (req, res, next) => {
  try {
    const result = await newsService.create(req);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  create
};
