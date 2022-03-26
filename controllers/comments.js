const commentsService = require('../services/comments');


const create = async (req, res, next) => {
    try {
        const result = await commentsService.create(req.body);
        res.status(201).json({
            data: result
        });
    }
    catch (err) {
        next(err);
    }
};
module.exports = { create };