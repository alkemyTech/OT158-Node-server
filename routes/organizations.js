const express = require('express');
const organizationsController = require('../controllers/organizations');
const router = express.Router();

/* GET organizations listing. */
router.get('/', organizationsController.getAll);
/* POST a new organization. */
router.post('/', organizationsController.create);
/* PUT an edit on a organization. */
router.put('/;id', organizationsController.update);
/* DELETE an organization(soft delete). */
router.delete('/:id', organizationsController.remove);

module.exports = router;
