const { Activities } = require('../models');

const getActivityById = async (id) => await Activities.findOne(id);

module.exports = { getActivityById };
