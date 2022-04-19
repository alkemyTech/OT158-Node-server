const { validationResult } = require('express-validator');
const {
  getOne,
  update,
  getById,
} = require('../repositories/organizations');
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

    const organization = await getById(id);
    if (!organization) return Promise.reject({
      message: "id non exists",
      status: NotFound,
    })

    const isUpdated = await update(id, changes);

    return isUpdated? await getById(id) : Promise.reject("unknow problems");

  } catch (error) {
    Promise.reject("unknow problems");
  }
}

module.exports = {
  getDataOrganization,
  updateOrganization,
};
