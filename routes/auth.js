const express = require('express');
const router = express.Router();
const { loginValidation } = require('../middlewares/auth')

router.post('/login', loginValidation);

module.exports = router;
