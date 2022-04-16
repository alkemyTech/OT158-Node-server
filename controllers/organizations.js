const organizationService = require('../services/organizations');
const { OK } = require('../utils/status');

const organizationData = async (req, res, next) => {
  try {
    const organization = await organizationService.getDataOrganization();
    res.status(OK).json({
      organization: organization
    })
  } catch (err) {
    next(err)
  }
};


module.exports = { organizationData };
