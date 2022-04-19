const express = require('express');
const router = express.Router();
const { update } = require('../controllers/activities');
const { updateValidator } = require('../middlewares/activities');
const { adminValidator } = require('../middlewares/adminValidator');

router.put('/:id', adminValidator, updateValidator, update);

module.exports = router;
