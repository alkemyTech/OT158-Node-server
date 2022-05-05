const { validationResult, body } = require('express-validator');
const {getById} = require('../repositories/categories')
const {BadRequest} = require('../utils/status')

const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(BadRequest).json({ errors: errors.array() });
  };
};

const validData = validate([
  body('name').notEmpty().isLength({min:1,max:50}),
  body('content').notEmpty().isLength({min:1,max:255}),
  body('image').notEmpty().isLength({min:1}),
  body('categoryId').isDecimal().custom(async (value)=>{
    const category = await getById(value)
    if(!category) return Promise.reject('Incorrect category value');
  }),
])


module.exports={validData}
