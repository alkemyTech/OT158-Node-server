const { validationResult, body } = require('express-validator');
const {getById} = require('../repositories/categories')
<<<<<<< HEAD
const {BadRequest} = require('../utils/status')
=======
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

<<<<<<< HEAD
    res.status(BadRequest).json({ errors: errors.array() });
=======
    res.status(400).json({ errors: errors.array() });
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
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