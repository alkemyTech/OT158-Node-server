const { validationResult } = require('express-validator');
const testimonialsRepo = require('../repositories/testimonials');
const { BadRequest, NotFound, ISError } = require('../utils/status');
const { throwError } = require('../utils/errorHandler')

const create = async (body) => {
	return await testimonialsRepo.create(body);
};

const update = async (req) => {

	try {
		if(!validationResult(req).isEmpty()) {
			return Promise.reject({
				status: BadRequest,
				message: "errores en el formulario",
			})
		}

		const { id } = req.params;
		const changes = {...req.body};

		const testimonial = await testimonialsRepo.getById(id);
		if(!testimonial) return Promise.reject({
			status: NotFound,
			message: "id non exists",
		})

		const isUpdated = await testimonialsRepo.update(id, changes);
		return isUpdated ? await testimonialsRepo.getById(id) : Promise.reject("unknow problems");
	} catch (error) {
		Promise.reject(error);
	}
}

const getAll = async (req) =>{
  const sizeOfPage= 10
  const { page } = req.query
  const count = await testimonialsRepo.getAll()
  const totalOfPage = totalPage(count.length, sizeOfPage)

  if(page && page<=totalOfPage){
    const condition = getPageCondition(page,sizeOfPage)
    const result = await testimonialsRepo.getAll(condition)
    return {
      total:count.length,
      count: result.length,
      totalOfPage,
      currentPage: +page,
      data: result,
      nextPage: page <totalOfPage?`/testimonials?=${+page+1}`:null,
      previousPage: page !=1 && page<=totalOfPage ?`/testimonials?=${+page-1}`:null
    }
  }
  else{
    const condition = getPageCondition()
    const result = await testimonialsRepo.getAll(condition);
    return {
      total:count.length,
      count: result.length,
      totalOfPage,
      currentPage: 1,
      data: result,
      nextPage: `/testimonials?=2`
    }
  }

}



//funciones auxiliares
const getPageCondition = (page,size) => {
  const limit = size ? size : 10
  const offset = page?(page-1) * limit : 0
  return {limit:limit, offset:offset}
}

const totalPage = (count,limit) => {
    const totalPage = Math.ceil(count/limit)
  return totalPage
}
const removeTestminonyById = async (id) => {
  try {
    const testimonial = await testimonialsRepo.getById(id);

    if(!testimonial){
      throwError('Testimonial not found', NotFound)
    }

    return await testimonialsRepo.remove({
      where: { id }
    });
  } catch (error) {
    throwError(error.message, ISError)
  }
};

module.exports = {
	create,
	update,
  getAll,
  removeTestminonyById
};
