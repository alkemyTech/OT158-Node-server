const express = require('express');
const usersController = require('../controllers/users');
const { adminValidator } = require('../middlewares/adminValidator');
const router = express.Router();

/* GET users listing. */
router.get('/', adminValidator, usersController.getAll);
router.get('/', usersController.getAll);
router.patch('/:id',adminValidator, usersController.update);
router.delete("/:id",adminValidator, usersController.removeUser)

module.exports = router;
