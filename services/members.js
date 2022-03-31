const { create } = require('../repositories/members');

const createService = async (newMember) => {
  const memberCreationService = await create(newMember)
    .then(memberCreated => {
      return memberCreated
    })

  return memberCreationService;
}

module.exports = { createService };
