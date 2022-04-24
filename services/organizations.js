const { validationResult } = require('express-validator');
const {
  getOne,
  update,
  getById,
} = require('../repositories/organizations');
const { slidesForOrg } = require('../repositories/slides');
const {
  NotFound,
  BadRequest,
} = require('../utils/status');

const getDataOrganization = async () => {
  try {
    const organization = await getOne();

    if (!organization) {
      const error = new Error('Organization not found');
      error.status = NotFound;
      throw error;
    }

    organization.slides = await slidesForOrg();

    return organization;

  } catch (error) {
    throw new Error(error.message);
  }
};

const updateOrganization = async (req) => {
  try {
    
    if (!validationResult(req).isEmpty()) {
      return Promise.reject({
        status: BadRequest,
        message: "errores de formulario",
      });
    }

    const { id } = req.params;
    const changes = {...req.body};

    await update(id, changes);
    return await getById(id);
  } catch (error) {
    Promise.reject(error);
  }
}

module.exports = {
  getDataOrganization,
  updateOrganization,
};
