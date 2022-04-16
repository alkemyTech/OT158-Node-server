const router = require('express').Router();
const controller = require('../controllers/slides');
const {adminValidator} = require('../middlewares/adminValidator');

router.post('/', controller.create);
router.get('/', adminValidator, controller.getAll);
router.get("/:id", controller.getById);
router.put('/:id', controller.update);


module.exports = router;
