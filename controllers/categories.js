const categoriesService = require('../services/categories');
const { NoContent } = require('../utils/status')

const getAll = async (req, res, next) => {
  try {


    const result = await categoriesService.getAll();
    res.status(200).json({
      meta: {
        status: 200,
        total: result.length,
        url: ''
      },
      data: result
    });
  }
  catch (error) {
    next(error)
  }
}


const create = async (req, res, next) => {
  try {
    const result = await categoriesService.create(req.body)
    res.status(201).json({
      meta: {
        status: 201,
        url: ''
      },
      data: result
    });
  }
  catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const id = req.params.id
    const body = req.body
    const result = await categoriesService.update(id, body, res)
    res.status(201).json({
      meta: {
        status: 201,
        url: ''
      },
      data: result
    });
  }
  catch (error) {
    next(error)
  }
}

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    await categoriesService.removeCategory(id);

    res.status(NoContent).json({
      data: null
    })
  } catch (error) {
    next(error)
  }
};

module.exports = { getAll, create, update, remove }
