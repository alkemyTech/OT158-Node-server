const categoriesRepository = require('../repositories/categories');


const getAll = async () => {
    const result = await categoriesRepository.getAll();
    return result;
}

const create = async (req) => {

    const result = await categoriesRepository.create(req)
        .then(categories => {
            return categories
        })
    return result;
}
module.exports = { getAll, create }
