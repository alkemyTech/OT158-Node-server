const { Contacts } = require("../models");

const create = async (newContact) => {
  const result = await Contacts.create(newContact);

  return result;
};

module.exports = { create };
