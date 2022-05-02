<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const { contactValidation } = require('../middlewares/contacts');
const { create, getAll } = require('../controllers/contacts');
const { adminValidator } = require('../middlewares/adminValidator')

router.get('/', adminValidator, getAll);
router.post('/', contactValidation, create);
=======
const express = require("express");
const router = express.Router();
const { contactValidation } = require("../middlewares/contacts");
const { create } = require("../controllers/contacts");

router.post("/", contactValidation, create);
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

module.exports = router;
