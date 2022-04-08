const express = require('express');
const router = express.Router();
const { update } = require('../controllers/activities');
const { updateValidator } = require('../middlewares/activities')

router.put('/:id', updateValidator, update);

module.exports = router;
