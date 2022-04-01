const express = require('express');
const { create, update } = require('../controllers/members');
const router = express.Router();
const { creationValidation } = require('../middlewares/members')

router.post('/', creationValidation, create);
router.put('/:id', update)

module.exports = router;
