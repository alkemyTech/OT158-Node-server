const { updateActivity } = require('../services/activities');
const { OK } = require('../utils/status')


const update = async (req, res, next) => {
  try {
    const body = req.body;

    const { id } = req.params;

    const result = await updateActivity(id, body);

    res.status(OK).json({
      data: result
    });

  } catch (err) {
    next(err)
  }
}

module.exports = { update };
