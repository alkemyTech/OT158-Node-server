const rolesService = require('../services/roles');

const getAll = async (req, res, next) => {
    try {
        const result = await rolesService.getAll(req);
        res.status(200).json({
            meta: {
                status: 200,
                total: result.length,
                url: ''
            },
            data: result
        });
    }
    catch (error) {
        return res.status(400).json({
            status: 400,
            message: error
        })
    }
}

module.exports = {getAll}