const usersService = require('../services/users');

const getAll = async (req, res, next) => {
  try {
    const result = await usersService.getAll(req);
    res.status(200).json({
      data: result
    });
  }
  catch (e) {
    next(e);
  }
};


const create = async (req, res, next) => {

  try {
    const result = await usersService.create(req);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

const update = async (req, res, next) => {
  try {
    const id = req.params.id
    const body = req.body
    const result = await usersService.update(id, body, res)
    res.status(200).json({
      status: "ok",
      message: "User updated",
      data: result
    });
  }
  catch (err) {
    next(err);
  }
}

module.exports = { getAll, create, update };
