<<<<<<< HEAD
const { getAllService, createService, updateService, removeService } = require('../services/members');
const { OK } = require("../utils/status")
=======
const { getAllService, createService, updateService } = require('../services/members');
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

const getAll = async (req, res, next) => {
  try {
    const result = await getAllService()
<<<<<<< HEAD
    res.status(OK).json({
=======
    res.status(200).json({
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
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

<<<<<<< HEAD
    res.status(OK).json({
=======
    res.status(200).json({
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
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

<<<<<<< HEAD
    return res.status(OK).json({
=======
    return res.status(200).json({
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
      data: result
    })
  } catch (err) {
    next(err);
  }
};

<<<<<<< HEAD
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
=======
module.exports = { create, update, getAll };
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
