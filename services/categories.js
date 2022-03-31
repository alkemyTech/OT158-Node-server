const categoriesRepository = require('../repositories/categories');


const getAll = async (req) => {
    const result = await categoriesRepository.getAll();
    return result;
}

module.exports = { getAll }