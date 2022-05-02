const contactsService = require("../services/contacts");
<<<<<<< HEAD
const { OK } = require("../utils/status");
=======
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

const create = async (req, res, next) => {
  const newContact = req.body;
  try {
    const result = await contactsService.create(newContact);
<<<<<<< HEAD

    res.status(200).json({
      message: 'contact created successfully',
=======
    res.status(200).json({
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

<<<<<<< HEAD
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
=======
module.exports = { create };
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
