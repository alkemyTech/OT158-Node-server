const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

router.get('/', usersController.getAll);
router.patch('/:id', usersController.update);
router.delete("/:id", usersController.removeUser)

module.exports = router;
