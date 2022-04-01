const { getAll, create, getById } = require('../repositories/members');

const getAllService = async () => {
  const listAll = await getAll();

  return listAll
};

const createService = async (newMember) => {
  const memberCreationService = await create(newMember);

  if (memberCreationService) {
    return memberCreationService;
  } else {
    const error = new Error('Record not found');

    error.status = 404;

    throw error
  }

};

const updateService = async (id, body) => {
  const member = await getById({ where: { id: id } });

  if (member) {
    const memberUpdated = await member.update(body);

    if (memberUpdated) {
      return memberUpdated
    } else {
      const error = new Error('Bad Request');

      error.status = 400;

      throw error
    }
  } else {
    const error = new Error('Record not found');

    error.status = 404;

    throw error
  }
}

module.exports = { getAllService, createService, updateService };
