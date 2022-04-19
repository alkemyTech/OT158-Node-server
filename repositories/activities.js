const { Activities } = require('../models');

const getActivityById = async (id) =>
  await Activities.findOne(id);

const create = async (newActivity) =>
  await Activities.create(newActivity);

module.exports = { getActivityById, create };
