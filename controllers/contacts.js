const contactsService = require("../services/contacts");
const { OK } = require("../utils/status");

const create = async (req, res, next) => {
  const newContact = req.body;
  try {
    const result = await contactsService.create(newContact);

    res.status(200).json({
      message: 'contact created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const getContacts = await contactsService.getAll();

    res.status(OK).json({
      message: 'contacts returned successfully',
      data: getContacts
    });
  } catch (error) {
    next(error)
  }
};

module.exports = { create, getAll };
