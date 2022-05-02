<<<<<<< HEAD
const contactsRepository = require('../repositories/contacts');
const { throwError } = require('../utils/errorHandler');
const { BadRequest, ISError, NotFound } = require('../utils/status');
const { createMessage, sendMail } = require('./mail.service');


const create = async (newContact) => {
  try{
    const contact = await contactsRepository.create(newContact)
    const {email, name} = contact
    const message = await createMessage(
      email,
      "Gracias por su consulta",
      "Gracias por contactarnos",
      `<h1>${name}, A la brevedad nos estaremos comunicando por tu consulta.<h1>`
    )
    await sendMail(message)
    return contact;
  }
  catch(error){
    throwError(BadRequest,"Bad Request")
  }
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

=======
const contactsRepository = require("../repositories/contacts");

const create = async (newContact) => {
  const result = await contactsRepository.create(newContact);
  return result;
};

module.exports = { create };
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
