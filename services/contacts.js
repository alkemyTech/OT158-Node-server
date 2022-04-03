const contactsRepository = require('../repositories/contacts');

const create = async (newContact) => {
  const result = await contactsRepository.create(
    newContact
  );
  return result;
};

const getAll = async () => {
  const result = await contactsRepository.getAll();
  return result;
};

module.exports = { create, getAll };
