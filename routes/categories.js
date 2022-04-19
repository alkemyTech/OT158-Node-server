const express = require ('express');
const { create, getAll, update } = require ("../controllers/categories");
const { adminValidator } = require('../middlewares/adminValidator');
const { creationValidation } = require ("../middlewares/categories")

const router = express.Router();

/* GET users listing. */
router.get('/',getAll);
router.post('/', adminValidator, creationValidation, create);
router.put("/:id", update)

module.exports = router;
