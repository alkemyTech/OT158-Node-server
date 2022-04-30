const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const { create, removeComment } = require('../controllers/comments');
const { creationValidation } = require("../middlewares/comments")
const { authenticathed } =  require('../middlewares/authenticathed')

router.post("/",authenticathed, creationValidation, create);
router.delete("/:id",authenticathed, removeComment);
=======
const { updateComments, create } = require('../controllers/comments');
const { updateCommentsValidator, creationValidation } = require('../middlewares/comments');
const { authenticathed } =  require('../middlewares/authenticathed')

router.post("/",authenticathed, creationValidation, create);
router.put('/:id', updateCommentsValidator, updateComments);
>>>>>>> 7aa7a4ba895f39df97bcdc129a39b9fe20d3b0f4

module.exports = router;
