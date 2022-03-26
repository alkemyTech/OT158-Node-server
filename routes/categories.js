const express = require('express');
const { create }= require("../controllers/categories");
const router = express.Router();

/* GET users listing. */
router.post('/',create);

module.exports = router;
