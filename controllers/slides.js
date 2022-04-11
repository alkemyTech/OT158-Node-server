const service = require('../services/slides');
const {
  OK,
} = require('../utils/status');


/* methods */
const create = async (req, res, next) => {

  try {
    let data = await service.create(req);
    res.status(OK).json({
      data,
    });
  } catch (error) {
    next(error);
  }

};

const getAll = async (req, res, next) => {

  try {
    let data = await service.getAll(req);
    res.status(OK).json({
      data,
    });
  } catch (error) {
    next(error);
  }

};

module.exports = {
  create,
  getAll,
}
