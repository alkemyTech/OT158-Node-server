<<<<<<< HEAD
const { Contacts } = require('../models');

const create = async (newContact) => {
  return await Contacts.create(newContact);
}

const getAll = async () => {
  return await Contacts.findAll();
}

module.exports = { create, getAll };
=======
const { Contacts } = require("../models");

const create = async (newContact) => {
  const result = await Contacts.create(newContact);

  return result;
};

module.exports = { create };
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
