const { create, getById } = require('../repositories/members');
const createService = async () => {

}

const updateService = async ({ params, body }) => {
    return await getById({
        where: {
            id: params.id
        }
    })
        .then(member => {
            if (member === null)
                return {
                    state: -1
                }
            return member.update(body)
            .then(memberUpdated => {
                    return {
                        state: 1,
                        data: memberUpdated
                    }
                })
        })

}

module.exports = { createService, updateService };