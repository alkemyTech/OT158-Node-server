const organizationRepository = require('../repositories/organizations');

const getDataOrganization = async () => {
  const organization = await organizationRepository.getAll();
  if (organization) {
    return organization
  } else {
    const error = new Error('Bad Request');

    error.status = 400;

    throw error
  };
};


module.exports = { getDataOrganization };
