const organizationService = require('../services/organizations');
const { OK } = require('../utils/status');

const organizationData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const organization = await organizationService.getDataOrganization(id);
    res.status(OK).json({
      organization: organization
    })
  } catch (err) {
    next(err)
  }
};

const update = async (req, res, next) => {

  try {
    const result = await organizationService.updateOrganization(req);
    return res.status(OK).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  organizationData,
  update,
};
