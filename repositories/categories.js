const db = require('../models/index')

const getOne= async(id)=>{
  const result = await db.Categories.findByPk(id)
  return result
}

module.exports = { getOne}