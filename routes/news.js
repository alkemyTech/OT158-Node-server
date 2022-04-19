const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');
const { validData } = require('../middlewares/news');

router.post('/', validData, newsController.create);
router.get('/', newsController.getAll);
router.put('/:id', newsController.update);

module.exports = router;
