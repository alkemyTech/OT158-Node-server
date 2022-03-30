const { createService, getAllService } = require('../services/members');

const create = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err);
    }
};

const getAll = async (req, res, next) => {
    try {
        const result = await getAllService()
        res.status(200).json({
            data: result
        })
    } catch (err) {
        next(err)
    }
};

module.exports = { create, getAll };