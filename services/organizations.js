const { getOne } = require('../repositories/organizations');
const { NotFound } = require('../utils/status');

const getDataOrganization = async () => {
  const organization = await getOne();

  if (!organization) {
    const error = new Error('Organization not found');
    error.status = NotFound;
    throw error;
  }

  return organization;
};

module.exports = { getDataOrganization };
