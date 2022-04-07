const organizationService = require('../services/organizations');

const getPublicData = async (req, res, next) => {
  try {
    const organization = await organizationService.getDataOrganization();
    res.status(200).json({
      data: organization
    })
  } catch (err) {
    next(err)
  }
};


module.exports = { getPublicData };
