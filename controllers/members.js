const service = require('../services/members');
const { OK } = require("../utils/status")

const getAll = async (req, res, next) => {
  try {
    const result = await service.getAll(req)
    res.status(OK).json({
      data: result
    })
  } catch (err) {
    next(err)
  }
};

const create = async (req, res, next) => {
  try {
    const newMember = req.body;

    const memberCreationHandler = await service.create(newMember);

    res.status(OK).json({
      ok: true,
      success: memberCreationHandler
    });
  }
  catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const result = await service.update(id, body);

    return res.status(OK).json({
      data: result
    })
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res ,next) => {
  try {
    const { id } = req.params;
    const result = await service.remove(id)
    return res.status(OK).json({
      msg: "Deleted succesful"
    })
  }
  catch (error){
    next(error)
  }
}

module.exports = { create, update, getAll, remove };
