const contactsService = require("../services/contacts");

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
        res.status(200).json({
            status: 'success',
            message: 'contacts returned successfully',
            data: getContacts
        });
    }
    catch (e) {
        return res.status(400).json({
            e,message: 'error returning contacts',
        });
    }
};

module.exports = { create, getAll};
