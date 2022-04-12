const router = require('express').Router();
const controller = require('../controllers/slides');
/* routes */
router.post('/', controller.create)
router.delete("/:id", controller.removeSlide)
router.get("/:id", controller.getById)

module.exports = router;
