const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');
const { validData } = require('../middlewares/news');
const { adminValidator } = require('../middlewares/adminValidator');

router.post('/',adminValidator,validData,newsController.create)

module.exports = router