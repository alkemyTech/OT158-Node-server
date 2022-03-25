const commentsService = require('../services/comments');


const create = async (req, res, next) => {
    try {
        const body = req.body
        const result = await commentsService.create(body);
        res.status(201).json({
            data: result
        });
        console.log(result)
    }
    catch (err) {
        next(err);
    }
};
module.exports = { create };