const contactsRepository = require('../repositories/contacts');
const { throwError } = require('../utils/errorHandler')
const { ISError, NotFound } = require('../utils/status')

const create = (newContact) => {
  return contactsRepository.create(newContact);
}


const getAll = async () => {
  try {
    const contacts = await contactsRepository.getAll();

    if(!contacts){
      throwError('Contacts not found', NotFound);
    }

    return contacts
  } catch (error) {
    throwError(error.message, ISError);
  }
}


module.exports = { create, getAll };

