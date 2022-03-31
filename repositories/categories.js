const db = require("../models")

const getAll = async () => {
    const result = await db.Categories.findAll()
    return result

}

module.exports = { getAll }