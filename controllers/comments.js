const commentsService = require('../services/comments');


const create = async (req, res, next) => {
    try {
        const result = await commentsService.create(req);
        res.status(200).json({
            data: result
        });
    }
    catch (err) {
        next(err);
    }
};
module.exports = { create };