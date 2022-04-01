const db = require("../models")

const getAll = async () => {
    const result = await db.Roles.findAll()
    return result

}

module.exports = { getAll }