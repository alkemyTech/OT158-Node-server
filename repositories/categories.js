const db = require("../models")

const getAll = async () => {
    const result = await db.Categories.findAll()
    return result

}


const create = async (categories) => {
    const result = await db.Categories.create(categories)
    return result
}


module.exports = { getAll, create }

