const usersRepository = require('../repositories/users');

const getAll = async (req)  => {
    const result = await usersRepository.getAll();
    return result;
}

const create = async (res) => {
    const result = await usersRepository.create(req);
    return result;
}

module.exports = { getAll, create };
