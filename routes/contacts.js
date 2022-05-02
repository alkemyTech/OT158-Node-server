const express = require('express');
const router = express.Router();
const { contactValidation } = require('../middlewares/contacts');
const { create, getAll } = require('../controllers/contacts');
const { adminValidator } = require('../middlewares/adminValidator')

router.get('/', adminValidator, getAll);
router.post('/', contactValidation, create);

module.exports = router;
