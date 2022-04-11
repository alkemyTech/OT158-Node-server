const contactsService = require("../services/contacts");
const { OK, BadRequest } = require("../utils/status");


const create = async (req, res, next) => {
  const newContact = req.body;
  try {
    const result = await contactsService.create(newContact);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res) => {
  try {
    const getContacts = await contactsService.getAll();
    res.status(OK).json({
      status: 'success',
      message: 'contacts returned successfully',
      data: getContacts
    });
  } catch (error) {
    return res.status(BadRequest).json({
      error,
      message: 'error returning contacts',
    });
  }
};

module.exports = { create, getAll };
