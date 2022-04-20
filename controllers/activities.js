const { createActivity } = require('../repositories/activities');
const { updateActivity } = require('../services/activities');
const { OK, Created } = require('../utils/status');


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

const create = async (req, res, next) => {
  try {
    const newActivity = req.body;
    const createdActivity = await createActivity(newActivity)
    res.status(Created).json({data:createdActivity});
  } catch (error) {
    next(error);
  }
}

module.exports = { update, create};
