const contactsRepository = require('../repositories/contacts');

const create = async (newContact) =>  await contactsRepository.create(newContact);


const getAll = async () =>  await contactsRepository.getAll();


module.exports = { create, getAll };
