const express = require('express');
const router = express.Router();

const testimonialsController = require('../controllers/testimonials');

router.post('/', testimonialsController.create);

module.exports = router;
