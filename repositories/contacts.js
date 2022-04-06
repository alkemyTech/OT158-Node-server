const { Contacts } = require('../models');

const create = async (newContact) =>  await Contacts.create(newContact);

const getAll = async () =>  await Contacts.findAll();


module.exports = { create, getAll };
