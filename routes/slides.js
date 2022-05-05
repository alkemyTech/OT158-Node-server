const router = require('express').Router();
const controller = require('../controllers/slides');
const { adminValidator } = require('../middlewares/adminValidator');
/* routes */
router.post('/', adminValidator, controller.create)
router.delete("/:id", adminValidator, controller.removeSlide)
router.get('/', adminValidator, controller.getAll);
router.get("/:id", controller.getById);
router.put('/:id', adminValidator, controller.updateSlide);


module.exports = router;
