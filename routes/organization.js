const express = require('express');
const router = express.Router();
const {
  organizationData,
  update,
} = require('../controllers/organizations');
const { adminValidator } = require('../middlewares/adminValidator');
const { updateForm } = require('../validations/organizationValidator');
const { updateValidation }= require("../middlewares/organization")

router.get('/public', organizationData);
router.put('/public/:id', adminValidator,updateValidation, update);

module.exports = router;
