const categoriesRepository = require('../repositories/categories');

module.exports = { 
    getAll: async () => {
        const result = await categoriesRepository.getAll();
        return result;
    },

    create: async(req)=>{
        
        const result = await categoriesRepository.create(req)
        .then(categories=>{
            return categories
        })
        return result;
    }
}
