const { validationResult, body } = require('express-validator');
const {getById} = require('../repositories/activities')


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

const validData = validate([
    body('name').notEmpty().isLength({min:1,max:50}),
    body('content').notEmpty().isLength({min:1,max:255}),
    body('image').notEmpty().isLength({min:1}),
    body('activitiesId').isDecimal().custom(async (value)=>{
      const activities = await getById(value)
      if(!activities) return Promise.reject('Incorrect activities value');
    }),
  ])
  module.exports={validData}



    