const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/contacts");
// const { adminValidator } = require('../middlewares/adminValidator');

router.get("/contacts",getAll);

module.exports = router;
