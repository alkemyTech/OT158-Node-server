const express = require('express');
const { create, getAll, update, remove } = require("../controllers/categories");
const { creationValidation } = require("../middlewares/categories");
const {authenticathed} = require("../middlewares/authenticathed");
const router = express.Router();

/* GET users listing. */
router.get('/',authenticathed, getAll);
router.post('/', creationValidation, create);
router.put("/:id", update)
router.delete("/:id", remove)

module.exports = router;
