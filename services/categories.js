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
<<<<<<< HEAD
	const categories = await categoriesRepository.getById(id);
	if (categories) {
		const updatedCategorie = await categoriesRepository.update(id, data);
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
=======
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
>>>>>>> dev
};

const getById = async (id) => {
	const category = await categoriesRepository.getById(id);

	if (!category) {
		const error = new Error('Category not found');
		error.status = 404;
		throw error;
	}

	return category;
};

module.exports = { getAll, create, update, getById };
