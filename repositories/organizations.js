const { Organizations } = require('../models')

const getOne = () => {
  return Organizations.findOne({
    attributes: ['name', 'image', 'phone', 'address', 'facebookUrl', 'linkedinUrl', 'instagramUrl']
  });
};

const update = async (id, changes) => {
  return await Organizations.update(changes, {
    where: {
      id
    }
  });
}

const getById = async (id) => {
  return await Organizations.findByPk(id);
}

module.exports = {
  getOne,
  update,
  getById,
};
