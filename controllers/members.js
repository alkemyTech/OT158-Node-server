const membersService = require('../services/members');

const create = async (req, res, next) => {
    try {
        let {
            name,
            facebookUrl,
            instagramUrl,
            linkedinUrl,
            image,
            description
        } = req.body
        const memberCreationHandler = await membersService.create({ name, facebookUrl, instagramUrl, linkedinUrl, image, description });
        res.status(200).json({
            successInCreating: memberCreationHandler
        })
    }
    catch (e) {
        next(e);
    }
};
module.exports = { create };
