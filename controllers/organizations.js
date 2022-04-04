const organizationService = require('../services/organizations');

const getPublicData = async (req, res) => {
  try {
    const { id } = req.params;
    const organization =
      await organizationService.getDataOrganization(id);
    if (!organization) {
      res
        .status(404)
        .json({ message: 'Organization not found' });
    } else {
      res.status(200).json(organization);
    }
  } catch (e) {
    return res.status(400).json({
      message: e
    });
  }
};

module.exports = { getPublicData };
