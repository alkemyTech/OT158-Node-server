const express = require('express');
const router = express.Router();

const {
  create,
  getAuthenticatedUserData,
  login,
} = require('../controllers/users');
const registerValidator = require('../validations/registerValidator');
const { loginValidation } = require('../middlewares/auth');

router.post('/register', registerValidator, create);
router.get('/me', getAuthenticatedUserData);
router.post('/login', loginValidation, login);

module.exports = router;
