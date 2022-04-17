const { Organizations } = require('../models')

const getOne = () => {
  return Organizations.findOne({
    attributes: ['name', 'image', 'phone', 'address']
  });

};

const update = async (id, changes) => {
  return await Organizations.update(changes, {
    where: { id }
  });
}

module.exports = {
  getOne,
  update,
};
