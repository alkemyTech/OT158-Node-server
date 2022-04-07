const organizationRepository = require('../repositories/organizations');

const getDataOrganization = async () => {
  return organizationRepository.getAll();
};


module.exports = { getDataOrganization };
