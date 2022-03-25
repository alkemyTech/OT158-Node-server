const membersRepository = require('../repositories/members');

const create = async ({ name, facebookUrl, instagramUrl, linkedinUrl, image, description }) => {
    const newMember = {
        name,
        facebookUrl,
        instagramUrl,
        linkedinUrl,
        image,
        description
    }
    const memberCreationService = await membersRepository.create(newMember)
        .then(memberCreated => {
            return memberCreated
        })
    return memberCreationService;
}

module.exports = { create };
