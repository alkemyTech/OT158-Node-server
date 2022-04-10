//getAll
//getById
//create
//update
//remove

const usersService = require('../services/users');
const { OK } = require ("../utils/status")

const getAll = async (req, res, next) => {
    try {
        const result = await usersService.getAll(req);
        res.status(OK).json({
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

module.exports = { getAll, create, removeUser };
