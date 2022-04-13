const { News } = require('../models');

const getAll = () => {
  return News.findAll();
};
const create = (body) => {
  return News.create(body);
};

const remove = async id => {
  return await News.destroy({ where: { id }});
};

module.exports={
  getAll,
  create,
  remove
}
