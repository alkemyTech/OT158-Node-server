const model = require("../models/contacts");

const create = async (req) => {
  const contact = { ...req };

  const result = await model.create(contact);

  return result;
};

module.exports = { create };
