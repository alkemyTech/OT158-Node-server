const express = require('express');
const usersController = require('../controllers/users');
const { adminValidator } = require('../middlewares/adminValidator');
const router = express.Router();

/* GET users listing. */
router.get('/', adminValidator, usersController.getAll);
router.delete("/:id", usersController.removeUser)

module.exports = router;
