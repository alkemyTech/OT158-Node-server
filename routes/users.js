const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

/* GET users listing. */
router.get('/', usersController.getAll);
router.delete("/:id", usersController.removeUser)

module.exports = router;
