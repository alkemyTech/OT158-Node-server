const express = require('express');
const commentsController = require('../controllers/comments');
const router = express.Router();

const validatorHandler = require('./../middleware/validatorHandler');
const {
    createCommentsSchema,
} = require('./../schemas/comments');


/* GET users listing. */
router.post('/', validatorHandler(createCommentsSchema, 'body'), commentsController.create);

module.exports = router;
