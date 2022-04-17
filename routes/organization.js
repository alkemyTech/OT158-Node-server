const express = require('express');
const router = express.Router();
const {
    organizationData,
    update,
} = require('../controllers/organizations');

router.get('/public', organizationData);
router.put('/public/:id', update);

module.exports = router;
