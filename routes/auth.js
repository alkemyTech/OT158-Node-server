const router = require('express').Router();
const { create } = require('../controllers/users');
const registerValidator = require('../validations/registerValidator');

/* routes */
router.post('/auth/register', registerValidator, create);



module.exports = router;