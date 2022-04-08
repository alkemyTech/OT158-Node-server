const { Members } = require("../models");

const getAll = async () => {
  const GetAll = await Members.findAll();
  return GetAll
};

const create = async newMember => {
  const memberCreationRepository = await Members.create(newMember);
  return memberCreationRepository;
};

const getById = async (member) => {
  const obtaining = await Members.findByPk(member)
  return obtaining
};

const update = async (dataUpdate, updateMember) => {
  const updated = await Members.update(dataUpdate, updateMember);
  return updated
};

const remove = async (memberId) => {
  return await Members.destroy({ where : { id : memberId }})
}

module.exports = { getAll, create, getById, update, remove };
