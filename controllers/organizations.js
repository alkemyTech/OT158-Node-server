const organizationsService = require('../services/organizations')
const getAll = async (req,res, next)=>{
  try {
    const result = organizationsService.getAll(req);
    res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}
const create = async (req,res, next)=>{
  try {
    const result = organizationsService.create(req);
    res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}
const update = async (req,res, next)=>{
  try {
    const result = organizationsService.update(req);
    res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}
const remove = async (req,res, next)=>{
  try {
    const result = organizationsService.remove(req);
    res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}

module.exports={
  getAll,
  create,
  update,
  remove
}