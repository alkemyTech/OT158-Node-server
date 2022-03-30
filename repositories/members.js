const { Members } = require('../models');

const create = async (newMember) => {
    
}

const getAll = async () => {
    const GetAll = await Members.findAll()
    return GetAll
}

module.exports = { create, getAll };