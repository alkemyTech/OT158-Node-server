const { body, validationResult } = require('express-validator');

exports.validateComments = [
    //check('user_id').isEmpty().withMessage('User can not be empty!'),
    body('body')
        .isEmpty()
        .withMessage('Body can not be empty!')
        .bail()
        .isLength({ min: 15 })
        .withMessage('Minimum 15 characters required!')
        .bail()
        .isString()
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];