const express = require('express');
const membersController = require('../controllers/members');
const router = express.Router();

router.post('/', membersController.create);

module.exports = router;
