const categoriesService = require('../services/categories');
const { NoContent, OK, Created } = require('../utils/status');

const getAll = async (req, res, next) => {
  try {
    const paginatedCategoriesList = await categoriesService.getAll(req);

    res.status(OK).json({
      data: paginatedCategoriesList
    });
  }
  catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await categoriesService.create(req.body);

    res.status(Created).json({
      meta: {
        status: Created,
        url: ''
      },
      data: result
    });
  }
  catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const result = await categoriesService.update(id, body, res);

    res.status(Created).json({
      meta: {
        status: Created,
        url: ''
      },
      data: result
    });
  }
  catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    await categoriesService.removeCategory(id);

    res.status(NoContent).json({
      data: null
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, create, update, remove }
