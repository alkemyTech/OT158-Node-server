const { Contacts } = require('../models');

const create = async (newContact) => {
  return await Contacts.create(newContact);
}

const getAll = async () => {
  return await Contacts.findAll();
}

module.exports = { create, getAll };
