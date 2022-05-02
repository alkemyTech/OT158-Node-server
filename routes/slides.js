const router = require('express').Router();
const controller = require('../controllers/slides');
<<<<<<< HEAD
const { adminValidator } = require('../middlewares/adminValidator');
/* routes */
router.post('/', controller.create)
router.delete("/:id", controller.removeSlide)
router.get('/', adminValidator, controller.getAll);
router.get("/:id", controller.getById);
router.put('/:id', adminValidator, controller.updateSlide);

=======
/* routes */
router.post('/', controller.create)
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

module.exports = router;
