const model = require('../models/comments');

const create = async (newComments) => {
    const result = await model.Comments.create(newComments)
    return result
}
module.exports = { create };