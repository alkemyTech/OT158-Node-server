const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');
const { validData } = require('../middlewares/news');

<<<<<<< HEAD
router.post('/',adminValidator,validData,newsController.create);
router.delete('/:id', adminValidator.validData, newsController.remove);

module.exports = router;
=======
router.post('/', validData, newsController.create);
router.get('/', newsController.getAll);

module.exports = router;
>>>>>>> dev
