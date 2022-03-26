const slideRepository = require('../repositories/users');

const create = async (req)  => {
    const result = await slideRepository.create();
    return result;
}

module.exports = { create };