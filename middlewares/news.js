const { validationResult, body } = require('express-validator');
const {getOne} = require('../repositories/categories')

const validData = validate([
  body('name').exists().isLength({min:1,max:50}),
  body('content').exists().isLength({min:1,max:255}),
  body('image').isBase64(),
  body('categoryId').exists().isDecimal().custom(async (value)=>{
    const category = await getOne(value)
    if(!category) return Promise.reject('Incorrect category value');
  }),
])

const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

module.exports={validData}