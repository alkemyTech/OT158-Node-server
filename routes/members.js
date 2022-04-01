const express = require('express');
const { create, getAll } = require('../controllers/members');
const router = express.Router();
const { creationValidation } = require('../middlewares/members')

router.get('/', getAll);
router.post('/', creationValidation, create);

module.exports = router;
