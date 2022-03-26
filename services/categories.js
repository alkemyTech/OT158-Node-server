const categoriesRepository = require('../repositories/categories');

module.exports = { 
    getAll: async (req) => {
        const result = await categoriesRepository.getAll();
        return result;
    },

    create: async(req)=>{
        const result = await categoriesRepository.create(req)
        return result;
    }
}
