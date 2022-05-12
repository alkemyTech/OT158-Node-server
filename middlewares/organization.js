const {
  check,
  validationResult,
} = require('express-validator');

const { BadRequest } = require("../utils/status")

module.exports = {
  updateValidation: async (req, res, next) => {
    const {name, image, address, phone, welcomeText, aboutUsText, facebookUrl, linkedinUrl, instagramUrl, email} = req.body

    if(name){
      await check('name', 'This field must have at least three characters')
        .isLength({min:3})
        .run(req);
      await check('name', 'This field must be a string')
        .isString()
        .run(req);
    }

    if(image){
      await check('image', 'This field must have at least three characters')
        .isLength({min:3})
        .run(req);
      await check("image", "This field must be a string")
        .isString()
        .run(req)
    }

    if(address){
      await check('address', 'This field must have at least three characters')
        .isLength({min:3})
        .run(req);
      await check("address","This field must be a string")
        .isString()
        .run(req)
    }

    if(phone){
      await check('phone', 'This field must have a maximum of ten characters')
        .isLength({max:10})
        .run(req);
      await check("phone","This field must be a number")
        .isNumeric()
        .run(req)
    }

    if(email){
      await check('email', 'This field must have at least three characters')
        .isLength({min:3})
        .run(req);
      await check('email', 'This field must be a email')
        .isEmail()
        .run(req);
    }

    if(welcomeText){
      await check('welcomeText', 'This field must have at least three characters')
        .isLength({min:3})
        .run(req);
      await check("welcomeText","This field must be a string")
        .isString()
        .run(req)
    }

    if(aboutUsText){
      await check('aboutUsText', 'This field must have at least three characters')
        .isLength({min:3})
        .run(req);
      await check("aboutUsText","This field must be a string")
        .isString()
        .run(req)
    }

    if(facebookUrl){
      await check('facebookUrl', 'This field must have at least three characters')
        .isLength({min:3})
        .run(req);
      await check("facebookUrl","This field must be a string")
        .isString()
        .run(req)
    }

    if(linkedinUrl){
      await check('linkedinUrl', 'This field must have at least three characters')
        .isLength({min:3})
        .run(req);
      await check("linkedinUrl","This field must be a string")
        .isString()
        .run(req)
    }

    if(instagramUrl){
      await check('instagramUrl', 'This field must have at least three characters')
        .isLength({min:3})
        .run(req);
      await check("instagramUrl","This field must be a string")
        .isString()
        .run(req)
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(BadRequest).json({
        ok: false,
        errors: errors.mapped()
      });
    }

    next();
  }
};
