const {
  getOne,
  update,
} = require('../repositories/organizations');
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

const updateOrganization = async (req) => {
  try {
    const { id } = req.params;
    const changes = {...req.body};
    const organization = await getById(id);
    if(!organization) return Promise.reject({
      ok: false,
      message: "id non exists",
      status: NotFound,
    })
    return await update(id, changes);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getDataOrganization,
  updateOrganization,
};
