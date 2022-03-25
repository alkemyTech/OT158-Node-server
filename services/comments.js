const commentsRepository = require('../repositories/comments');

const create = async () => {
    const result = await commentsRepository.create();
    return result;
}
module.exports = { create };