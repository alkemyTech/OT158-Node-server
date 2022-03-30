const express = require('express');
const { create, getAll } = require('../controllers/members');
const router = express.Router();

router.get('/', getAll)
router.post('/', create);

module.exports = router;