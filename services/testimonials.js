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
  removeTestminonyById
};
