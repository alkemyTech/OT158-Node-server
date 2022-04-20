const db = require ("../models")

const getAll = async () => {
  const result = await db.Categories.findAll()
  return result

}

const create = async (categories) => {
  const result = await db.Categories.create(categories)
  return result
}

const update = async (id, data) => {
  const result = await db.Categories.update(data, { where: { id: id } })
  return result
}

const getById = async (id) => {
  const result = await db.Categories.findByPk(id)
  return result
}

const remove = async (id) => await db.Categories.destroy(id);

module.exports = { getAll, create, update, getById, remove }
