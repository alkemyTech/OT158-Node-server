const { News } = require('../models');

const getAll = async () => {
  const result = News.findAll();
  return result;
};
const create = async (body) => {
  const result = News.create(body);
  return result;
};

module.exports = {
  getAll,
  create
};
