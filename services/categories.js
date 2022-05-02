const categoriesRepository = require('../repositories/categories');
<<<<<<< HEAD
const { throwError } = require('../utils/errorHandler');
const { BadRequest, NotFound } = require('../utils/status');

const UPDATED_STATE_APPROVED = 1;
=======
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

const getAll = async () => {
  const allCategories = await categoriesRepository.getAll();
  const result = allCategories.map((categorie) => {
    return categorie.name;
  });
  return result;
};
<<<<<<< HEAD
const getById = async (req) => {
  try {
    const {id} = req.params;
  
    const category = await categoriesRepository.getById(id);
  
    if(!category)
      throwError('Category not found', NotFound);
  
    return category;
  } catch (error) {
    throw error;    
  }
};
=======
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

const create = async (req) => {
  const result = await categoriesRepository.create(req);
  return result;
};

const update = async (id, data) => {
  const categories = await categoriesRepository.getById(id);
  if (categories) {
<<<<<<< HEAD
    const updatedCategorieState =
      await categoriesRepository.update(id, data);

    if (
      updatedCategorieState[0] === UPDATED_STATE_APPROVED
    ) {
      return await categoriesRepository.getById(id);
    } else {
      throwError('Category not updated', BadRequest);
    }
  } else {
    throwError('Category not found', NotFound);
  }
};

const removeCategory = async (id) => {
  try {
    const category = await categoriesRepository.getById(id);

    if (!category) {
      throwError('Category not found', NotFound);
    }

    return await categoriesRepository.remove({
      where: { id }
    });
  } catch (error) {
    throwError('Category not found', NotFound);
  }
};

module.exports = { getAll, create, update, removeCategory, getById };
=======
    const updatedCategorie =
      await categoriesRepository.update(id, data);
    if (updatedCategorie === 1) {
      const result = await categoriesRepository.getById(id);
      return result;
    } else {
      const error = new Error('Categories not updated');
    error.status = 400;
    throw error;
    }
  } else {
    const error = new Error('Categories not found');
    error.status = 404;
    throw error;
  }
};
module.exports = { getAll, create, update };
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
