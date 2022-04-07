const organizationService = require('../services/organizations');

const organizationData = async (req, res, next) => {
  try {
    const organization = await organizationService.getDataOrganization();
    res.status(200).json({
      organization: organization
    })
  } catch (err) {
    next(err)
  }
};


module.exports = { organizationData };
