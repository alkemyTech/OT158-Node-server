const express = require('express');
<<<<<<< HEAD
const { create, getAll, update, remove, getById } = require("../controllers/categories");
const { adminValidator } = require('../middlewares/adminValidator');
const { creationValidation } = require("../middlewares/categories")
const router = express.Router();

/* GET users listing. */
router.get('/', getAll);
router.post('/', creationValidation, create);
router.put("/:id", update)
router.get("/:id",adminValidator, getById)
router.delete("/:id", remove)
=======
const { create, getAll, update }= require("../controllers/categories");
const { creationValidation }=require("../middleware/categories")
const router = express.Router();

/* GET users listing. */
router.get('/',getAll);
router.post('/',creationValidation,create);
router.put("/:id", update)
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

module.exports = router;
