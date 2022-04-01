const express = require('express');
const router = express.Router();
const { loginValidation } = require('../middlewares/auth')

/* POST users listing */
router.post('/login', loginValidation)

module.exports = router;
