const { getAll, create, getById } = require('../repositories/members');

const getAllService = async () => {
  const listAll = await getAll();
  return listAll
};

const createService = async (newMember) => {
  const memberCreationService = await create(newMember)
    .then(memberCreated => {
      return memberCreated
    });

  return memberCreationService;
};

const updateService = async (id, body) => {
  return await getById({
    where: {
      id: id
    }
  })
    .then(member => {
      if (member === null)
        return {
          state: -1
        }
      return member.update(body)
        .then(memberUpdated => {
          if (member !== memberUpdated)
            return {
              state: 0,
              data: memberUpdated
            }
          return {
            state: 1,
            data: memberUpdated
          }
        })
    })
}

module.exports = { getAllService, createService, updateService };
