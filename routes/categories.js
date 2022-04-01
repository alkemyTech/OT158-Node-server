const express = require('express');
const { create, getAll, update }= require("../controllers/categories");
const { creationValidation }=require("../middleware/categories")
const router = express.Router();

/* GET users listing. */
router.get('/',getAll);
router.post('/',creationValidation,create);
router.put("/:id", update)

module.exports = router;
