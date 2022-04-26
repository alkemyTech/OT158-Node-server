const contactsRepository = require('../repositories/contacts');
const { throwError } = require('../utils/errorHandler');
const { BadRequest } = require('../utils/status');
const { createMessage, sendMail } = require('./mail.service');
const create = (newContact) => {
  try{
    const {email, name} = newContact
    const message = createMessage(
      email,
      "Gracias por su consulta",
      "Gracias por contactarnos",
      `<h1>${name}, A la brevedad no estaremos comunicando por tu consulta.<h1>`
    )
    sendMail(message)
    return contactsRepository.create(newContact);
  }
  catch(error){
    throwError(BadRequest,"Bad Request")
  }
}


const getAll = () => {
  return contactsRepository.getAll();
}


module.exports = { create, getAll };

