const express = require('express');
const router = express.Router();
const { contactValidation } = require("../middlewares/contacts");
const { create, getAll } = require("../controllers/contacts");
const { adminValidator } = require("../middlewares/adminValidator");

router.post("/", adminValidator, contactValidation, create);
router.get('/', adminValidator, getAll);

module.exports = router;
