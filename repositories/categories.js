const db = require("../models")


module.exports = {
    getAll :async () => {
        const result = await db.Categories.findAll()
        return result

    },

    create: async(categories)=>{
        const result = await db.Categories.create(categories)
        return result
    }

}

