//getAll
//getById
//create
//update
//remove

const usersService = require('../services/users');
const {OK} = require('../utils/status');

const getAll = async (req, res, next) => {
  try {
    const usersList = await usersService.getAll();
    res.status(OK).json({
      data: usersList
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await usersService.create(req);
    res.status(OK).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, create };
