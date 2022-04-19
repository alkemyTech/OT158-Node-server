const express = require('express');
const { getAll } = require('../controllers/comments');
const router = express.Router();
const newsController = require('../controllers/news');
const { validData } = require('../middlewares/news');

router.post('/', validData, newsController.create);
router.get('/', newsController.getAll);
router.get("/:id/comments",getAll)

module.exports = router;
