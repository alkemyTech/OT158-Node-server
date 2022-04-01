const { getAllService, createService, updateService } = require('../services/members');

const getAll = async (req, res, next) => {
  try {
    const result = await getAllService()
    res.status(200).json({
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

    res.status(200).json({
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

    return res.status(200).json({
      data: result
    })
  } catch (err) {
    next(err);
  }
};

module.exports = { create, update, getAll };
