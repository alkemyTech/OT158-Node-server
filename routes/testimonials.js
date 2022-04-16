const express = require('express');
const router = express.Router();

const { create } = require('../controllers/testimonials');
const { testimonialsValidator } = require('../middlewares/testimonials');
const { adminValidator } = require('../middlewares/adminValidator');

router.post('/', adminValidator, testimonialsValidator, create);

module.exports = router;
