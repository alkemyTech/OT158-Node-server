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
<<<<<<< HEAD
  return await Members.findByPk(member)
=======
  const obtaining = await Members.findOne(member)
  return obtaining
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
};

const update = async (dataUpdate, updateMember) => {
  const updated = await Members.update(dataUpdate, updateMember);
  return updated
};

<<<<<<< HEAD
const remove = async (memberId) => {
  return await Members.destroy({ where : { id : memberId }})
}

module.exports = { getAll, create, getById, update, remove };
=======
module.exports = { getAll, create, getById, update };
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
