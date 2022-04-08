const organizationRepository = require('../repositories/organizations');

const getDataOrganization = async () => {
 try {
  const organization = await organizationRepository.getOne();
  if (organization) {
    return organization
  } else {
    const error = new Error('Bad Request');
    error.status = 400;
     throw error
  };
} catch (error) {
   next(error);
 }
 }


module.exports = { getDataOrganization };
