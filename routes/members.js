const express = require('express');
const { getAll, create, update, remove } = require('../controllers/members');
const { adminValidator } = require('../middlewares/adminValidator');
const router = express.Router();
const { validation } = require('../middlewares/members')

router.get('/', getAll);
router.post('/', adminValidator, validation, create);
router.put('/:id', adminValidator, validation, update)
router.delete('/:id', adminValidator, remove)

module.exports = router;
