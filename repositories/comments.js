const { Comments } = require('../models');

const getCommentById = async (id) => await Comments.findOne(id);

module.exports = { getCommentById };
