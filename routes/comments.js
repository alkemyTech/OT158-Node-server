const express = require("express");
const router = express.Router();
const { getAllCommnets } = require('../controllers/comments')
const { adminValidator } = require('../middlewares/adminValidator');

router.get('/', adminValidator, getAllCommnets);

module.exports = router;
