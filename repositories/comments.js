const { Comments } = require('../models');

const getAllComments = async (params) => await Comments.findAll(params);

module.exports = { getAllComments };
