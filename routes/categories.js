const express = require('express');
const { create, getAll, update, remove, getById } = require("../controllers/categories");
const { adminValidator } = require('../middlewares/adminValidator');
const {authenticathed} = require("../middlewares/authenticathed");
const { creationValidation } = require("../middlewares/categories")
const router = express.Router();

/* GET users listing. */
router.get('/', getAll);
router.post('/', creationValidation, create);
router.put("/:id", update)
router.get("/:id",adminValidator, getById)
router.delete("/:id", remove)

module.exports = router;
