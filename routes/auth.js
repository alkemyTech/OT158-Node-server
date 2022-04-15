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
// const { authenticathed } = require('../middlewares/authenticathed');

/* routes */
router.post('/register', registerValidator, create);
router.post('/login', loginValidation);
router.get('/me', /* authenticathed, */ getAuthenticatedUserData);

module.exports = router;
