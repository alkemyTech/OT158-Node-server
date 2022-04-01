const { create, getById } = require('../repositories/members');
const createService = async () => {

}

const updateService = async (id, body) => {
  return await getById({
    where: {
      id: id
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
