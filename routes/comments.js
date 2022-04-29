const express = require("express");
const router = express.Router();
const { adminValidator } = require('../middlewares/adminValidator');
const { updateComments, create, getAllCommnets } = require('../controllers/comments');
const { updateCommentsValidator, creationValidation } = require('../middlewares/comments');
const { authenticathed } =  require('../middlewares/authenticathed')

router.get('/', adminValidator, getAllCommnets);
router.post("/",authenticathed, creationValidation, create);
router.put('/:id', updateCommentsValidator, updateComments);

module.exports = router;
