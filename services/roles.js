const rolesRepository = require('../repositories/roles');

module.exports = { 
    getAll: async (req) => {
        const result = await rolesRepository.getAll();
        return result;
    }
}
