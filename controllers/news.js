<<<<<<< HEAD
const newsService = require('../services/news')
const { OK, BadRequest } = require('../utils/status')
=======
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
>>>>>>> dev

const create = async (req, res, next) => {
  try {
    const createdNew = await newsService.create(req);
    res.status(Created).json({ data: createdNew });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {

    const { id } = req.params;
    const result = await newsService.remove(id);

    res.status(OK).json({ data: result });

  } catch (error) {
    res.status(BadRequest).json(error)
  }
};

module.exports = {
<<<<<<< HEAD
  create,
  remove
=======
  getAll,
  create
>>>>>>> dev
};
