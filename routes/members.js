const express = require('express');
<<<<<<< HEAD
const { getAll, create, update, remove } = require('../controllers/members');
=======
const { getAll, create, update } = require('../controllers/members');
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
const router = express.Router();
const { validation } = require('../middlewares/members')

router.get('/', getAll);
router.post('/', validation, create);
router.put('/:id', validation, update)
<<<<<<< HEAD
router.delete('/:id', remove)
=======
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

module.exports = router;
