const organizationRepository = require('../repositories/organizations');

const getDataOrganization = async id => await organizationRepository.getOne(id);

module.exports = { getDataOrganization };
