//getAll
//getById
//create
//update
//remove

const { usersService, updateService } = require('../services/users');

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
    const { id } = req.params;

    const body = req.body;

    const result = await updateService(id, body);

    return res.status(200).json({
      data: result
    })
  } catch (err) {
    next(err);
  }
};


module.exports = { getAll, create, update };
