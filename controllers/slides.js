const service = require('../services/slides');
const { OK } = require('../utils/status');

const create = async (req, res, next) => {
  try {
    let data = await service.create(req);
    res.status(OK).json({
      data
    });
  } catch (error) {
    next(error);
  }
};

const removeSlide = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await service.remove(id);
    res.status(OK).json({
      msg: 'Deleted successful'
    });
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await service.getById(id);
    res.status(OK).json({
      data
    });
  } catch (error) {
    next(error);
  }
};


const getAll = async (req, res, next) => {

  try {
    const data = await service.getAll(req);
    return res.status(OK).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = { create, getById, removeSlide, getAll };
