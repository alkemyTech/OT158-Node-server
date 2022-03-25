const commentsRepository = require('../repositories/comments');

const create = async (data) => {
    const result = await commentsRepository.create(data);
    return result;
}
module.exports = { create };