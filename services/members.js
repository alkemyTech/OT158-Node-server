const { create, getAll } = require('../repositories/members');

const createService = async (newMember) => {
  const memberCreationService = await create(newMember)
    .then(memberCreated => {
      return memberCreated
    });

  return memberCreationService;
};

const getAllService = async () => {
  const listAll = await getAll();
  return listAll
};

module.exports = { createService, getAllService };
