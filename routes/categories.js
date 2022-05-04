const express = require('express');
const { create, getAll, update, remove, getById } = require("../controllers/categories");
const { adminValidator } = require('../middlewares/adminValidator');
const {authenticathed} = require("../middlewares/authenticathed");
const { creationValidation } = require("../middlewares/categories")
const router = express.Router();

/* GET users listing. */
router.get('/',authenticathed, getAll);
router.post('/', adminValidator, creationValidation, create);
router.put("/:id", adminValidator, update)
router.delete("/:id", adminValidator, remove)
router.get("/:id", adminValidator, getById)

module.exports = router;
