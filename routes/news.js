const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');
const { validData } = require('../middlewares/news');
const { updateForm } = require('../validations/newsValidator');

router.post('/', validData, newsController.create);
router.get('/', newsController.getAll);
router.put('/:id', updateForm, newsController.update);

module.exports = router;
