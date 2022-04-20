const express = require('express');
const router = express.Router();

const { create, update, } = require('../controllers/testimonials');
const { testimonialsValidator, validateUpdateForm } = require('../middlewares/testimonials');
const { adminValidator } = require('../middlewares/adminValidator');

router.post('/', adminValidator, testimonialsValidator, create);
router.put('/:id', adminValidator, validateUpdateForm, update);

module.exports = router;
