const service = require('../services/slides');
const { OK } = require('../utils/status');

const create = async (req, res, next) => {
  try {
    const data = await service.create(req);
    res.status(OK).json({
      data
    });
  } catch (error) {
    next(error);
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

const update = async (req, res, next) => {
  try {
    const body = req.body;

    const { id } = req.params;

    const result = await service.updateSlide(id, body);

    res.status(OK).json({
      data: result
    });

  } catch (err) {
    next(err)
  }
}

module.exports = { create, getById, update };
