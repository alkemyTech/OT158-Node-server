const contactsRepository = require('../repositories/contacts');

const create = (newContact) => {
  return contactsRepository.create(newContact);
}


const getAll = () => {
  return contactsRepository.getAll();
}


module.exports = { create, getAll };

