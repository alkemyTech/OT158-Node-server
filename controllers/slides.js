const service = require('../services/slides');

module.exports = {

    create: async (req, res, next) => {
        try {
            let data = await service.create(req);
            res.status(200).json({
                data,
            });
        } catch (error) {
            next(error);
        }
    },

}