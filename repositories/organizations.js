const { Organizations } = require('../models')

const getOne = () => {
  return Organizations.findOne({
    attributes: {
      exclude: ['id', 'email', 'deletedAt', 'createdAt', 'updatedAt', 'welcomeText', 'aboutUsText']
    }
  });
};

module.exports = { getOne };
