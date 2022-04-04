const { Organizations } = require('../models/organizations');

const getOne = async (id) => {
  const result = await Organizations.findOne({
    where: { id: id },
    attributes: ['name', 'image', 'phone', 'address']
  });
  return result;
};

module.exports = { getOne };
