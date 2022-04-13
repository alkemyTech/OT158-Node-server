const router = require('express').Router();
const controller = require('../controllers/slides');
// const isUserAdmin = require('../middlewares/checkUserAdmin')

/* routes */
router.post('/', controller.create);
router.get("/:id", controller.getById)
router.get('/', /* isUserAdmin, */ controller.getAll);


module.exports = router;
