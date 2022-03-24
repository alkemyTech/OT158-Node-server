const usersRepository = require('../repositories/users');

const getAll = async (req)  => {
    const result = await usersRepository.getAll();
    return result;
}

module.exports = { getAll };