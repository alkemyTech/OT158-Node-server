const express = require('express');
const { create, getAll }= require("../controllers/categories");
const { creationValidation }=require("../middleware/categories")
const router = express.Router();

/* GET users listing. */
/* router.get('/',getAll); */
router.post('/',creationValidation,create);

module.exports = router;
