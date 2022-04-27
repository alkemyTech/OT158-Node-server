const express = require('express');
const router = express.Router();

const { create, update, getAll } = require('../controllers/testimonials');
const { testimonialsValidator, validateUpdateForm } = require('../middlewares/testimonials');
const { adminValidator } = require('../middlewares/adminValidator');

router.get("/", getAll)
router.post('/', adminValidator, testimonialsValidator, create);
router.put('/:id', adminValidator, validateUpdateForm, update);

module.exports = router;
