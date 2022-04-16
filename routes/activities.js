const express = require('express');
const router = express.Router();
const { update, create } = require('../controllers/activities');
const { updateValidator, createValidator } = require('../middlewares/activities');
const { adminValidator } = require('../middlewares/adminValidator');

router.put('/:id', updateValidator, update);
router.post('/',adminValidator, createValidator, create);

module.exports = router;
