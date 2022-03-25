const { Comments } = require('../models/comments');

const create = async (newComments) => {
    //const result = await model.
    const result = await Comments
    console.log(result)
    return result
}
module.exports = { create };