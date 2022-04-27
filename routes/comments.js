const express = require("express");
const router = express.Router();
const { create, removeComment } = require('../controllers/comments');
const { creationValidation } = require("../middlewares/comments")
const { authenticathed } =  require('../middlewares/authenticathed')

router.post("/",authenticathed, creationValidation, create);
router.delete("/:id",authenticathed, removeComment);

module.exports = router;
