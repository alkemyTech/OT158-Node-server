const model = require('../models/user')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const getAll = async () => {
    const result = [];
    return result;
}

const create = async (req) => {

    let errors = validationResult(req)
    if (errors.isEmpty()) {
        let user = { ...req };
        user.password = bcrypt.hashSync(req.password, 12);

        let result = await model.create(user);

        return result;
    }

    return null;
}

module.exports = { getAll, create };
