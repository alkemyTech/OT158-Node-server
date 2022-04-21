const { News } = require('../models');

const getAll = (options) => {
  return News.findAndCountAll({
    limit: options.limit,
    offset: options.offset
  });
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
