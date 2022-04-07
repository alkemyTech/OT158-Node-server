const { Organizations } = require('../models')

const getAll = () => {
  return Organizations.findOne({
    attributes: ['name', 'image', 'phone', 'address']
  });

};

module.exports = { getAll };
