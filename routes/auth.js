const express = require('express');
const router = express.Router();

const {
  create,
  getAuthenticatedUserData,
} = require('../controllers/users');
const registerValidator = require('../validations/registerValidator');
const {
  loginValidation
} = require('../middlewares/auth')

/* routes */
router.post('/register', registerValidator, create);
router.post('/login', loginValidation);
router.get('/me', getAuthenticatedUserData);

module.exports = router;
