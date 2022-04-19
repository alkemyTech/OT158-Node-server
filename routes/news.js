const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');
const { validData } = require('../middlewares/news');
const { updateForm } = require('../validations/newsValidator');
const { adminValidator } = require('../middlewares/adminValidator');

router.post('/', validData, newsController.create);
router.get('/', newsController.getAll);
router.put('/:id', adminValidator, updateForm, newsController.update);

module.exports = router;
