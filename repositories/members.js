const { Members } = require("../models");

const create = async newMember => {
    const memberCreationRepository = await Members.create(newMember);
    return memberCreationRepository;
};

module.exports = { create };
