const { News } = require('../models');

const getAll = () => {
  return News.findAll();
};
const create = (body) => {
  return News.create(body);
};

const getById = (newId) =>{
  return News.findByPk(newId)
}
module.exports = {
  getAll,
  create,
  getById
};
