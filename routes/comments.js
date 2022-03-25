const express = require('express');
const commentsController = require('../controllers/comments');
const router = express.Router();

/* GET users listing. */
router.post('/', commentsController.create);

module.exports = router;
