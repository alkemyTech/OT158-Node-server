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

module.exports = { create };
