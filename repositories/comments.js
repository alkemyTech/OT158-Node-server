const model = require('../models/comments');

const create = async (newComments) => {
    const result = Comments.create(newComments)
    console.log(result)
    return result
}
module.exports = { create };