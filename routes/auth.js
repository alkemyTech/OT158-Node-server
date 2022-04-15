const express = require('express');
const router = express.Router();

const {
  create,
  getAuthedUser,
} = require('../controllers/users');
const registerValidator = require('../validations/registerValidator');
const {
  loginValidation
} = require('../middlewares/auth')
// const { authenticathed } = require('../middlewares/authenticathed');

/* routes */
router.post('/register', registerValidator, create);
router.post('/login', loginValidation);
router.get('/me', /* authenticathed, */ getAuthedUser);

module.exports = router;
