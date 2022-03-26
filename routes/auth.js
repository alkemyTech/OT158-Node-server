const router = require('express').Router();
const { create } = require('../controllers/users');
const registerValidator = require('../validations/registerValidator');

/* routes */
router.post('/register', registerValidator, create);



module.exports = router;