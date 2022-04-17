const router = require('express').Router();
const controller = require('../controllers/slides');
const adminValidator = require('../middlewares/adminValidator');
/* routes */
router.post('/', controller.create);
router.get('/', adminValidator, controller.getAll);
router.get("/:id", controller.getById)


module.exports = router;
