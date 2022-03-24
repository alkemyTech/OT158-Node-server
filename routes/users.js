const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

/* GET users listing. */
router.get('/', usersController.getAll);

module.exports = router;
