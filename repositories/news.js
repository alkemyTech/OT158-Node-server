<<<<<<< HEAD
const { News } = require('../models');

const getAll = () => {
  return News.findAll();
};

const create = (body) => {
  return News.create(body);
};

const update = async (id, changes) => {
  return await News.update(changes,{
    where: {id},
  })
}

const getById = async (id) => {
  return await News.findByPk(id);
};

const remove = async (id) => await News.destroy(id);

module.exports = {
  getAll,
  create,
  update,
  getById,
  remove
};
=======
const {News} = require('../models')

const create= async(body)=>{
  const result = News.create(body);
  return result
}

module.exports={
  create
}
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
