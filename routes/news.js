const express = require('express');
const { getCommentsByNew } = require('../controllers/comments');
const router = express.Router();
const newsController = require('../controllers/news');
const { adminValidator } = require('../middlewares/adminValidator');
const { validData } = require('../middlewares/news');

router.post('/', validData, newsController.create);
router.get('/', newsController.getAll);
router.get("/:id/comments",getCommentsByNew)
router.get('/:id', adminValidator, newsController.getById);
router.delete('/:id', adminValidator, newsController.deleteById);

module.exports = router;
