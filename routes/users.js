const express = require('express');
const usersController = require('../controllers/users');
const {adminValidator} = require('../middlewares/adminValidator')
const router = express.Router();

/* GET users listing. */
router.get('/',adminValidator ,usersController.getAll);

module.exports = router;
