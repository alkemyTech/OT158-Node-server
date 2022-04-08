const { Activities } = require('../models');

const getByIdActivity = async (id) => await Activities.findOne(id);

module.exports = { getByIdActivity };
