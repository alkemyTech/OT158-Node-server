const testimonialsService = require('../services/testimonials');
const { BadRequest, OK } = require('../utils/status');

const create = async (req, res, next) => {
	try {
		const data = await testimonialsService.create(req.body);
		res.status(OK).json(data);
	} catch (error) {
		res.status(BadRequest).json(data);
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

const getAll = async (req, res, next) =>{
  try{
    const data = await testimonialsService.getAll(req)
    return res.status(OK).json(data)
  }
  catch(error){
    next(error)
  }
}

module.exports = {
	create,
	update,
  getAll
};
