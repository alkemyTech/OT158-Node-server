// const express = require('express');
// const usersController = require('../controllers/users');
// const router = express.Router();

// /* GET users listing. */
// router.get('/', usersController.getAll);

// module.exports = router;

const { update } = require('../controllers/users')

const express = require('express');
const router = express.Router();


router.patch('/:id', update);


module.exports = router;
