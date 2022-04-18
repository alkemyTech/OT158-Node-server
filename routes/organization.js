const express = require('express');
const router = express.Router();
const {
  organizationData,
  update,
} = require('../controllers/organizations');
const {
  updateForm
} = require('../validations/organizationValidator');

router.get('/public', organizationData);
router.put('/public/:id', updateForm, update);

module.exports = router;
