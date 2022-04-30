const { getPage } = require('./pagination.service');
const categoriesRepository = require('../repositories/categories');
const { throwError } = require('../utils/errorHandler');
const { BadRequest, NotFound } = require('../utils/status');

const UPDATED_STATE_APPROVED = 1;

const getAll = async (req) => {
  try {
    const {page} = req.query;

    const paginated = getPage('categories',categoriesRepository,page);

    return paginated;
    
  } catch (error) {
    throw error;
  }

};
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




const create = async (req) => {
  const result = await categoriesRepository.create(req);
  return result;
};

const update = async (id, data) => {
  const categories = await categoriesRepository.getById(id);
  if (categories) {
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
