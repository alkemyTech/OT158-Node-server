const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');
const { validData } = require('../middlewares/news');
const { isAdmin } = require('../middlewares/users');

router.get('/',newsController.getAll)
router.post('/',isAdmin,validData,newsController.create)
router.put('/:id',newsController.update)
router.delete('/:id',newsController.remove)

module.exports = router