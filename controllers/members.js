const { createService } = require('../services/members');

const create = async (req, res, next) => {
    try {
        const memberCreationHandler = await createService(newMember = req.body);

        res.status(200).json({
            ok: true,
            success: memberCreationHandler
        });
    }
    catch (err) {
        next(err);
    }
};

module.exports = { create };
