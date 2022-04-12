const { getActivityById } = require('../repositories/activities');
const { throwError } = require('../utils/errorHandler');
const { Forbidden, NotFound } = require('../utils/status');

const updateActivity = async (id, body) => {
  const activity = await getActivityById({ where: { id } });

  if (activity) {
    const updateStatus = await activity.update(body);

    if (!updateStatus) {
      throwError('Bad Request', Forbidden);
    }

    return updateStatus;

  } else {
    throwError('Record not found', NotFound);
  };
}

module.exports = { updateActivity };
