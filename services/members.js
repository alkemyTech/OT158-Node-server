const { create } = require('../repositories/members');

const create = async ({ name, facebookUrl, instagramUrl, linkedinUrl, image, description }) => {
    const newMember = {
        name,
        facebookUrl,
        instagramUrl,
        linkedinUrl,
        image,
        description
    }

    const memberCreationService = await create(newMember)
        .then(memberCreated => {
            return memberCreated
        })

    return memberCreationService;
}

module.exports = { create };
