const { create, update, getById } = require('../repositories/members');

const createService = async () => {

}

const updateService = async ({ id }, dataUpdate) => {
    return await getById({
        where: {
            id: id
        }
    })
        .then(member => {
            if (member == null) {
                return 0
            }
            return update(dataUpdate, {
                where: {
                    id: id
                }
            })
                .then(memberUpdated => {
                    return memberUpdated
                })
        })

}

module.exports = { createService, updateService };