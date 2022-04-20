const { News } = require('../models');

const getAll = () => {
  return News.findAll();
};
const create = (body) => {
  return News.create(body);
};
const getById = (id)=>{
  return News.findByPk(id);
}
module.exports = {
  getAll,
  create,
  getById
};
