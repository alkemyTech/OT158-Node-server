const express = require('express');
const router = express.Router();

const testimonialsController = require('../controllers/testimonials');
const testimonialsMiddleware = require('../middlewares/testimonials');

router.post(
	'/',
	testimonialsMiddleware.testimonialsValidator,
	testimonialsController.create
);

module.exports = router;
