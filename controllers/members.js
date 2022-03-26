const { create } = require('../services/members');

const create = async (req, res, next) => {
    try {
        let {
            name,
            facebookUrl,
            instagramUrl,
            linkedinUrl,
            image,
            description
        } = req.body;

        const memberCreationHandler = await create({ name, facebookUrl, instagramUrl, linkedinUrl, image, description });

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
