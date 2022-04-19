const express = require('express');
const router = express.Router();
const { getAll } = require("../controllers/comments");

router.get("/",getAll);

module.exports = router;
