const rolesRepository = require('../repositories/roles');


const getAll = async (req) => {
    const result = await rolesRepository.getAll();
    return result;
}

module.exports = { getAll }