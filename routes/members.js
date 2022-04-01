const express = require('express');
const { getAll, create, update } = require('../controllers/members');
const router = express.Router();
const { validation } = require('../middlewares/members')

router.get('/', getAll);
router.post('/', validation, create);
router.put('/:id', validation, update)

module.exports = router;
