const activitiesService = require('../services/activities');

const getAll = async (req, res, next) => {
    try {
        const result = await activitiesService.getAll(req);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        next(e);
    }
};

module.exports = { getAll };