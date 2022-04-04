const organizationRepository = require('../repositories/organizations');

const getDataOrganization = async (id) => {
  const result = await organizationRepository.getOne(id);
  return result;
}


module.exports = { getDataOrganization };
