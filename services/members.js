const { create, getAll } = require('../repositories/members');

const createService = async ()  => {
    
};

const getAllService = async () => {
    const listAll = await getAll()
    return listAll
};

module.exports = { createService, getAllService };