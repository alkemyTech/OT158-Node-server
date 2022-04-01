const { createService, getAllService } = require('../services/members');

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

module.exports = { create, getAll };
