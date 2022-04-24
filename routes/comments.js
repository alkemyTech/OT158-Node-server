const express = require("express");
const router = express.Router();
const { create } = require('../controllers/comments');
const { creationValidation } = require("../middlewares/comments")
const { authenticathed } =  require('../middlewares/authenticathed')

router.post("/",authenticathed, creationValidation, create);

module.exports = router;
