const { Contacts } = require('../models');

const create = (newContact) => {
  return Contacts.create(newContact);
}

const getAll = () => {
  return Contacts.findAll();
}

module.exports = { create, getAll };
