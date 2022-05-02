const service = require('../services/slides');
<<<<<<< HEAD
const { OK, Created } = require('../utils/status');

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

const removeSlide = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await service.removeSlide(id);
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

const updateSlide = async (req, res, next) => {
  try {
    const body = req.body;

    const { id } = req.params;

    const result = await service.updateSlide(id, body);

    res.status(Created).json({
      status: Created,
      data: result
    });

  } catch (error) {
    res.status(error.status).json({
      status: error.status,
      msg: error.message
    });
  }
};

const getAll = async (req, res, next) => {

  try {
    const data = await service.getAll(req);
    return res.status(OK).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getById, updateSlide, getAll, removeSlide };
=======

module.exports = {

    create: async (req, res, next) => {
        try {
            let data = await service.create(req);
            res.status(200).json({
                data,
            });
        } catch (error) {
            next(error);
        }
    },

}
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
