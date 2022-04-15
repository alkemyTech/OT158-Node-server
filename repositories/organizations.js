const { Organizations } = require('../models')

const getOne = () => {
  return Organizations.findOne({
    attributes: ['name', 'image', 'phone', 'address']
  });

};

module.exports = { getOne };
