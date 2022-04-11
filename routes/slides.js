const router = require('express').Router();
const controller = require('../controllers/slides');
/* routes */
router.post('/', controller.create);
router.get('/', controller.getAll);

module.exports = router;
