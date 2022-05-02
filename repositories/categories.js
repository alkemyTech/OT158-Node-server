<<<<<<< HEAD
const db = require ("../models")

const getAll = async () => {
  const result = await db.Categories.findAll()
  return result
=======
const db = require("../models")

const getAll = async () => {
    const result = await db.Categories.findAll()
    return result
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

}

const create = async (categories) => {
<<<<<<< HEAD
  const result = await db.Categories.create(categories)
  return result
}

const update = async (id, data) => {
  const result = await db.Categories.update(data, { where: { id: id } })
  return result
}

const getById = async (id) => {
=======
    const result = await db.Categories.create(categories)
    return result
}

const update = async (id, data)=>{
  const result = await db.Categories.update(data,{where: {id:id}})
  return result
}

const getById = async(id)=>{
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
  const result = await db.Categories.findByPk(id)
  return result
}

<<<<<<< HEAD
const remove = async (id) => await db.Categories.destroy(id);

module.exports = { getAll, create, update, getById, remove }
=======
module.exports = { getAll, create, update , getById }
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
