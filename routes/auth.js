const express = require('express');
const { login } = require('../controllers/auth');
const router = express.Router();
const { loginValidation } = require('../middlewares/auth')

/* POST users listing */
router.post('/login', loginValidation, login )

module.exports = router;