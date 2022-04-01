const { Members } = require('../models');

const create = async (newMember) => {

}

const getById = async (member) => {
  const obtaining = await Members.findOne(member)
  return obtaining
}

const update = async (dataUpdate, updateMember) => {
  const updated = await Members.update(dataUpdate, updateMember);
  return updated
}

module.exports = { create, getById, update };
