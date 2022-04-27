const contactsRepository = require('../repositories/contacts');
const { throwError } = require('../utils/errorHandler');
const { BadRequest } = require('../utils/status');
const { createMessage, sendMail } = require('./mail.service');
const create = async (newContact) => {
  try{
    const contact = await contactsRepository.create(newContact)
    const {email, name} = contact
    const message = createMessage(
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
  return await contactsRepository.getAll();
}


module.exports = { create, getAll };

