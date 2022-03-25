const Joi = require('joi');

const body = Joi.string().min().max(365);
const userId = Joi.number().integer();

const createCommentsSchema = Joi.object({
    body: body.required(),
    userId: userId.required(),
})

module.exports = {
    createCommentsSchema
}