const contactsRepository = require("../repositories/contacts");

const create = async (newContact) => {
  const result = await contactsRepository.create(newContact);
  return result;
};

module.exports = { create };
