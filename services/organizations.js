const organizationRepository = require('../repositories/organizations');
const { NotFound } = require("../utils/status");

const getDataOrganization = async () => {
  try {
    const organization = await organizationRepository.getOne();
    if (organization) {
      return organization
    } else {
      const error = new Error('Bad Request');
      error.status = NotFound;
      throw error
    };
  } catch (error) {
    return error;
  }
}


module.exports = { getDataOrganization };
