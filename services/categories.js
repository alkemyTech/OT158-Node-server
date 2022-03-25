const categoriesRepository = require('../repositories/categories');

module.exports = { 
    getAll: async (req) => {
        const result = await categoriesRepository.getAll();
        return result;
    }
}
