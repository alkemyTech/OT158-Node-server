const usersService = require('../services/users');
const { OK } = require ("../utils/status")

const getAll = async (req, res, next) => {
    try {
        const result = await usersService.getAll(req);
        res.status(OK).json({
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {

    try {
        const result = await usersService.create(req);
        res.status(OK).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

const removeUser = async (req,res,next)=>{
  const id = req.params.id
  try {
    const result = await usersService.remove(id)
    res.status(OK).json({
      msg:"Deleted successful"
    })
  }
  catch (err){
    next(err)
  }
}

const update = async (req, res, next) => {
  try {
    const id = req.params.id
    const body = req.body
    const result = await usersService.update(id, body, res)
    res.status(OK).json({
      message: "User updated",
      data: result
    });
  }
  catch (err) {
    next(err);
  }
}

module.exports = { getAll, create, removeUser, update };
