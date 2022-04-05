const usersRepository = require('../repositories/users');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const getAll = async ()  => {
    const result = await usersRepository.getAll();
    return result;
}

const create = async (req) => {

    validationResult(req).throw();

    let user = { ...req.body };
    user.password = await bcrypt.hash(req.body.password, 12);

    const result = await usersRepository.create(user);
    return result;
}

module.exports = { getAll, create };
