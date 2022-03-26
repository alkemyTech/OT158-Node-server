const express = require('express');
const { create } = require('../controllers/members');
const router = express.Router();
const { creationValidation } = require('../middlewares/members')

router.post('/', creationValidation, create);

module.exports = router;
