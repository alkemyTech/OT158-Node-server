const contactsService = require("../services/contacts");

const create = async (req, res, next) => {
  try {
    const result = await contactsService.create(req);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
