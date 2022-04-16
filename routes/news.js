const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');
const adminValidator = require('../middlewares/adminValidator');
const { validData } = require('../middlewares/news');

router.post('/', validData, newsController.create);
router.get('/', newsController.getAll);
router.get('/:id', adminValidator, newsController.getById);

module.exports = router;
