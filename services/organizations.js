const organizationRepository = require('../repositories/organizations');
const { NotFound } = require('../utils/status');

const getDataOrganization = async () => {
  const organization = await organizationRepository.getOne();

  if (!organization) {

    const error = new Error('Organization not found');
    error.status = NotFound;
    throw error;

  } else {
    return await organization;
  }
};

module.exports = { getDataOrganization };
