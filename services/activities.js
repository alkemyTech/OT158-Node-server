const activitiesRepository = require('../repositories/activities');

const getAll = async (req)  => {
    const result = await activitiesRepository.getAll();
    return result;
}

module.exports = { getAll };