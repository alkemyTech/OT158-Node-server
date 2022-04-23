const express = require("express");
const router = express.Router();
const { create } = require('../controllers/comments');
const { creationValidation } = require("../middlewares/comments")

// const { authenticated } =  require('../middlewares/authenticathed')

router.post("/", creationValidation, create); //authenticathed;

module.exports = router;
