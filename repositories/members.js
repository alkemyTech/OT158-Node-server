const { Members } = require("../models");

const create = async newMember => {
  const memberCreationRepository = await Members.create(newMember);
  return memberCreationRepository;
};

const getAll = async () => {
  const GetAll = await Members.findAll();
  return GetAll
};

module.exports = { create, getAll };
