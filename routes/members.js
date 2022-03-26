const express = require('express');
const membersController = require('../controllers/members');
const router = express.Router();

/* GET users listing. */
router.post('/', membersController.create);

module.exports = router;
