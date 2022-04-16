const router = require('express').Router();
const controller = require('../controllers/slides');

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get("/:id", controller.getById);
router.put('/:id', controller.update);


module.exports = router;
