const express = require('express');
const { create, getAll, update, remove } = require("../controllers/categories");
const { creationValidation } = require("../middlewares/categories")
const router = express.Router();

/* GET users listing. */
router.get('/', getAll);
router.post('/', creationValidation, create);
router.put("/:id", update)
router.delete("/:id", remove)

module.exports = router;
