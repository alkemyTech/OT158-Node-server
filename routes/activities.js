const express = require('express');
const activitiesController = require('../controllers/activities');
const router = express.Router();

/* GET activities listing. */
router.get('/', activitiesController.getAll);

module.exports = router;
