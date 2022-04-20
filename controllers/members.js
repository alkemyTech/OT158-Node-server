const { getAllService, createService, updateService, removeService } = require('../services/members');
const { OK } = require("../utils/status")

const getAll = async (req, res, next) => {
  try {
    const result = await getAllService(req)
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

    const memberCreationHandler = await createService(newMember);

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

    const result = await updateService(id, body);

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
    const result = await removeService(id)
    return res.status(OK).json({
      msg: "Deleted succesful"
    })
  }
  catch (error){
    next(error)
  }
}

module.exports = { create, update, getAll, remove };
