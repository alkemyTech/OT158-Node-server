const categoriesRepository = require ('../repositories/categories');
const { BadRequest, NotFound } = require ("../utils/status")

const UPDATED_STATE_APPROVED = 1

const getAll = async () => {
  const allCategories = await categoriesRepository.getAll();
  const result = allCategories.map((categorie) => {
    return categorie.name;
  });
  return result;
};

const create = async (req) => {
  const result = await categoriesRepository.create(req);
  return result;
};

const update = async (id, data) => {
  const categories = await categoriesRepository.getById(id);
  if (categories) {

    const updatedCategorieState = await categoriesRepository.update(id, data);

    if (updatedCategorieState[0] === UPDATED_STATE_APPROVED) {
      return await categoriesRepository.getById(id);
    } else {
      const error = new Error('Categories not updated');
      error.status = BadRequest;
      throw error;
    }
  } else {
    const error = new Error('Categories not found');
    error.status = NotFound;
    throw error;
  }
};
module.exports = { getAll, create, update };
