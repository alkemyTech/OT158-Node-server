const { getOne } = require('../repositories/organizations');
const { NotFound } = require('../utils/status');

const getDataOrganization = async () => {
  try {
    const organization = await getOne();

    if (!organization) {
      const error = new Error('Organization not found');
      error.status = NotFound;
      throw error;
    }

    return organization;

  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getDataOrganization };
