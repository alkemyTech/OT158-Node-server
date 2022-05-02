const express = require('express');
<<<<<<< HEAD
const { getCommentsByNew } = require('../controllers/comments');
const router = express.Router();
const newsController = require('../controllers/news');
const { adminValidator } = require('../middlewares/adminValidator');
const { validData } = require('../middlewares/news');
const { updateForm } = require('../validations/newsValidator');

router.post('/', validData, newsController.create);
router.get('/', newsController.getAll);
router.put('/:id', adminValidator, updateForm, newsController.update);
router.get("/:id/comments",getCommentsByNew)
router.get('/:id', adminValidator, newsController.getById);
router.delete('/:id', adminValidator, newsController.deleteById);

module.exports = router;
=======
const router = express.Router();
const newsController = require('../controllers/news');
const { validData } = require('../middlewares/news');
const { adminValidator } = require('../middlewares/adminValidator');

router.post('/',adminValidator,validData,newsController.create)

module.exports = router
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
