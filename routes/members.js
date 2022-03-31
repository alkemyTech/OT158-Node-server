const express = require('express');
const {create,update } = require('../controllers/members');
const router = express.Router();

router.post('/', create);
router.put('/:id', update)

module.exports = router;
