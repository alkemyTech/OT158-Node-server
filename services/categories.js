const categoriesRepository = require('../repositories/categories');
const { throwError } = require('../utils/errorHandler')
const { BadRequest, NotFound } = require('../utils/status');

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
    const updatedCategorie =
      await categoriesRepository.update(id, data);
    if (updatedCategorie === 1) {
      const result = await categoriesRepository.getById(id);
      return result;
    } else {
      throwError('Categories not updated', BadRequest);
    }
  } else {
    throwError('Category not found', NotFound);
  }
};

const removeCategory = async (id) => {
  const category = await categoriesRepository.getById(id);

  if (category) {
    return await categoriesRepository.remove({ where: { id: id } });
  } else {
    throwError('Category not found', NotFound);
  }

};

module.exports = { getAll, create, update, removeCategory };
