const express = require('express');
const { getAll, create, update, remove } = require('../controllers/members');
const router = express.Router();
const { validation } = require('../middlewares/members')

router.get('/', getAll);
router.post('/', validation, create);
router.put('/:id', validation, update)
router.delete('/:id', remove)

module.exports = router;
