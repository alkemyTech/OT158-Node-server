const express = require('express');
const router = express.Router();
const { getPublicData } = require('../controllers/organizations');

router.get('/public/:id', getPublicData);

module.exports = router;
