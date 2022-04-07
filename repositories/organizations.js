const { Organizations } = require('../models')

const getAll = () => {
  return Organizations.findAll();
};

module.exports = { getAll };
