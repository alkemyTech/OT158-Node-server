const express = require('express');
const { getAll, create, update } = require('../controllers/members');
const router = express.Router();
const { creationValidation } = require('../middlewares/members')

router.get('/', getAll);
router.post('/', creationValidation, create);
router.put('/:id', update)

module.exports = router;
