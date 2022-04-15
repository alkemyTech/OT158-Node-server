const express = require('express');
const router = express.Router();
const { organizationData } = require('../controllers/organizations');

router.get('/public', organizationData);

module.exports = router;
