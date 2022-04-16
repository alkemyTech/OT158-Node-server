const { Organizations } = require('../models')

const getOne = () => {
  return Organizations.findOne({
    attributes: ['name', 'image', 'phone', 'address', 'facebook', 'linkedin', 'instagram']
  });
};

module.exports = { getOne };
