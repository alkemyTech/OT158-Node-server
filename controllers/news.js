const newsService = require('../services/news');
const {
  OK,
  Created,
  NotFound
} = require('../utils/status');
const { throwError } = require('../utils/errorHandler');

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

const update = async (req, res, next) => {
  try {
    const result = await newsService.update(req);
    return res.status(OK).json(result);
  } catch (error) {
    next(error);
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newFinded = await newsService.getById(id);

    if (!newFinded) throwError('Inexistent new!', NotFound);

    res.status(OK).json({ data: newFinded });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  const id = req.params.id;
  try {
    await newsService.deleteNews(id);
    res.status(OK).json({
      msg: 'Deleted successful'
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  deleteById
};
