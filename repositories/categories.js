const db = require("../models")


module.exports = {
    getAll :async () => {
        const result = await db.Categories.findAll()
        return result

    }

}

