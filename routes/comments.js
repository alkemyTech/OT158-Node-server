const express = require("express");
const router = express.Router();
const { updateComments, create } = require('../controllers/comments');
const { updateCommentsValidator, creationValidation } = require('../middlewares/comments');
const { authenticathed } =  require('../middlewares/authenticathed')

router.post("/",authenticathed, creationValidation, create);
router.put('/:id', updateCommentsValidator, updateComments);

module.exports = router;
