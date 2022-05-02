const express = require('express');
const router = express.Router();
const { create, update, remove } = require('../controllers/testimonials');
const { testimonialsValidator, validateUpdateForm } = require('../middlewares/testimonials');
const { adminValidator } = require('../middlewares/adminValidator');

router.post('/', adminValidator, testimonialsValidator, create);
router.put('/:id', adminValidator, validateUpdateForm, update);
router.delete('/:id', adminValidator, remove);

module.exports = router;
