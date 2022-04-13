<<<<<<< HEAD
const express = require('express');
const { create, getAll, update, getById }= require("../controllers/categories");
const { creationValidation }=require("../middleware/categories")
const { adminValidator } = require('../middlewares/adminValidator');
=======
const express = require ('express');
const { create, getAll, update } = require ("../controllers/categories");
const { creationValidation } = require ("../middlewares/categories")
<<<<<<< HEAD
>>>>>>> dev
=======

>>>>>>> dev
const router = express.Router();

/* GET users listing. */
router.get('/',getAll);
router.post('/',creationValidation,create);
router.put("/:id", update)
router.get('/:id', adminValidator, getById)

module.exports = router;
