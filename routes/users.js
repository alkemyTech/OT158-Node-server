const express = require('express');
const router = express.Router();
const { update, getAll } = require('../controllers/users');

/* GET users listing. */
router.get('/', getAll);
router.patch('/:id', update)

module.exports = router;
