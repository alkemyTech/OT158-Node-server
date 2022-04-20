const { Comments } = require('../models');

const getAllCommnets = async (params) => await Comments.findAll(params);

module.exports = { getAllCommnets };
