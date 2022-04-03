const { Contacts } = require('../models');

const create = async (newContact) => {
  const result = await Contacts.create(newContact);

  return result;
};

const getAll = async () => {
  const result = await Contacts.findAll();
  return result;
};

module.exports = { create, getAll };
