const express = require('express');
const router = express.Router();
const { contactValidation } = require('../middlewares/contacts');
const { create, getAll } = require('../controllers/contacts');

router.get('/', getAll);
router.post('/', contactValidation, create);

module.exports = router;
