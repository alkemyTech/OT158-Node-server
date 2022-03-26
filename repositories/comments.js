const model = require('../models');

const create = async (newComments) => {
    const result = await model.Comments.create(newComments)
    return result
}
module.exports = { create };    