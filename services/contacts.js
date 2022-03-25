const contactsRepository = require("../repositories/contacts");

const create = async (res) => {
  const result = await contactsRepository.create(req);
  return result;
};

module.exports = { create };
