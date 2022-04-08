const { getByIdActivity } = require('../repositories/activities');
const { throwError } = require('../utils/errorHandler');
const { Forbidden, NotFound } = require('../utils/status');

const updateActivity = async (id, body) => {
  const activity = await getByIdActivity({ where: { id: id } });

  if (activity) {
    const updateStatus = await activity.update(body);

    if (updateStatus) {
      return updateStatus
    } else {
      throwError('Bad Request', Forbidden);
    };

  } else {
    throwError('Record not found', NotFound);
  };
}

module.exports = { updateActivity };
