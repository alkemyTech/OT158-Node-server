const testimonialsService = require('../services/testimonials');
const { OK, NoContent } = require('../utils/status');

const create = async (req, res, next) => {
	try {
		const data = await testimonialsService.create(req.body);
		res.status(OK).json(data);
	} catch (error) {
		next(error)
	}
};

const update = async (req, res, next) => {
	try {
		const data = await testimonialsService.update(req);
		return res.status(OK).json(data);
	} catch (error) {
		next(error);
	}
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    await testimonialsService.removeTestimonials(id);

    res.status(NoContent).json({
      message: 'Testimonial removed successfully',
      data: null
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, update, remove };
