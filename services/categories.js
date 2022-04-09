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
  return await categoriesRepository.create(req);
};

const update = async (id, data) => {
  const categories = await categoriesRepository.getById(id);

  if (categories) {
    const updatedCategorie = await categoriesRepository.update(id, data);

    if (updatedCategorie === 1) {
      return await categoriesRepository.getById(id);
    } else {
      throwError('Categories not updated', BadRequest);
    }
  } else {
    throwError('Category not found', NotFound);
  }
};

const removeCategory = async (id) => {
  const category = await categoriesRepository.getById(id);

  if (!category) {
    throwError('Category not found', NotFound);
  }

  return await categoriesRepository.remove({ where: { id } });

};

module.exports = { getAll, create, update, removeCategory };
