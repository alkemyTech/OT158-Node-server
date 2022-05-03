const express = require("express");
const router = express.Router();
const { adminValidator } = require('../middlewares/adminValidator');
const { updateComments, create, getAllCommnets, removeComment } = require('../controllers/comments');
const { updateCommentsValidator, creationValidation } = require('../middlewares/comments');
const { authenticathed } =  require('../middlewares/authenticathed');

router.get('/', adminValidator, getAllCommnets);
router.post("/",authenticathed, creationValidation, create);
router.put('/:id', updateCommentsValidator, updateComments);
router.delete("/:id",authenticathed, removeComment);

module.exports = router;
