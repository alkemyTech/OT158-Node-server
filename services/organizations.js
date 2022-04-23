const { validationResult } = require('express-validator');
const {
  getOne,
  update,
  getById,
} = require('../repositories/organizations');
const { slidesForOrganization } = require('../repositories/slides');
const {
  NotFound,
  BadRequest,
} = require('../utils/status');

const getDataOrganization = async (id) => {
  try {
    const organization = await getOne(id);

    if (!organization) {
      const error = new Error('Organization not found');
      error.status = NotFound;
      throw error;
    }
    organization.slides = await slidesForOrganization(id);
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
