//getAll
//getById
//create
//update
//remove

const usersService = require('../services/users');

const getAll = async (req, res, next) => {
    try {
        const result = await usersService.getAll(req);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        next(e);
    }
};

module.exports = { getAll };