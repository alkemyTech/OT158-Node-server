const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activities');
const { validData } = require('../middlewares/activities');
const { adminValidator } = require('../middlewares/users');

router.post('/',adminValidator,validData,activitiesController.create)

module.exports = router

