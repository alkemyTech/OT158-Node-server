const router = require('express').Router();
const controller = require('../controllers/slides');
/* routes */
router.post('/', controller.create)

module.exports = router;
