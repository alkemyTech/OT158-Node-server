const { News } = require('../models');

const getAll = () => {
  return News.findAll();
};
const create = (body) => {
  return News.create(body);
};

module.exports = {
  getAll,
  create
};
