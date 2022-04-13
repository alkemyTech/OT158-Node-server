const { News } = require('../models');

const getAll = () => {
  return News.findAll();
};
const create = (body) => {
  return News.create(body);
};

<<<<<<< HEAD
const remove = async id => {
  return await News.destroy({ where: { id }});
};

module.exports={
  create,
  remove
}
=======
module.exports = {
  getAll,
  create
};
>>>>>>> dev
