const express = require('express')
const router = express.Router();
const commentsController = require('../controllers/comments');
const { commentValidation } = require('../middlewares/comments');

router.post('/',commentValidation, commentsController.create)