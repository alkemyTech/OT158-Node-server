const { Contacts } = require("../models");


const create = async (req) => {
  const contact = { ...req };

  const result = await Contacts.create(contact);

  return result;
};

module.exports = { create };
