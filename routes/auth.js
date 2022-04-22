const express = require('express');
const router = express.Router();
const { create, login } = require('../controllers/users');
const registerValidator = require('../validations/registerValidator');
const { loginValidation } = require('../middlewares/auth');

router.post('/register', registerValidator, create);
router.post('/login', loginValidation, login);

module.exports = router;
