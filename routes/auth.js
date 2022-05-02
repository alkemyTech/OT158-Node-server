const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { create, login } = require('../controllers/users');
const registerValidator = require('../validations/registerValidator');
const { loginValidation } = require('../middlewares/auth');

router.post('/register', registerValidator, create);
router.post('/login', loginValidation, login);
=======
const { loginValidation } = require('../middlewares/auth')

router.post('/login', loginValidation);
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

module.exports = router;
