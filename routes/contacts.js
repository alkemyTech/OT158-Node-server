const express = require("express");
const router = express.Router();
const { contactValidation } = require("../middlewares/contacts");
const { create } = require("../controllers/contacts");

router.post("/", contactValidation, create);

module.exports = router;
