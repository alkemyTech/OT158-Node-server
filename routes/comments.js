const express = require("express");
const router = express.Router();
const { updateComments } = require('../controllers/comments');
const { updateCommentsValidator } = require('../middlewares/commnets')

router.put('/:id', updateCommentsValidator, updateComments);

module.exports = router;
