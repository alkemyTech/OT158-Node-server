const db = require("../models")


module.exports = {
    getAll :async () => {
        const result = await db.Roles.findAll()
        return result

    }

}