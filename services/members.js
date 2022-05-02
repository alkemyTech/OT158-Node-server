<<<<<<< HEAD
const { getAll, create, getById, remove } = require('../repositories/members');
const { NotFound, BadRequest } = require("../utils/status")

const getAllService = async () => {
  const listAll = await getAll();
=======
const { getAll, create, getById } = require('../repositories/members');

const getAllService = async () => {
  const listAll = await getAll();

>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
  return listAll
};

const createService = async (newMember) => {
  const memberCreationService = await create(newMember);

  if (memberCreationService) {
    return memberCreationService;
  } else {
    const error = new Error('Record not found');
<<<<<<< HEAD
    error.status = NotFound;
=======

    error.status = 404;

>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
    throw error
  }

};

const updateService = async (id, body) => {
<<<<<<< HEAD
  const member = await getById(id);
=======
  const member = await getById({ where: { id: id } });
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865

  if (member) {
    const memberUpdated = await member.update(body);

    if (memberUpdated) {
      return memberUpdated
    } else {
      const error = new Error('Bad Request');
<<<<<<< HEAD
      error.status = BadRequest;
=======

      error.status = 400;

>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
      throw error
    }
  } else {
    const error = new Error('Record not found');
<<<<<<< HEAD
    error.status = NotFound;
    throw error
  }
}

const removeService = async (id)=>{
  try{
    const user = await getById(id);
    if(!user){
      const error = new Error('Member not found');
      error.status = NotFound;
      throw error;
    }

    return await remove(id);
  }
  catch(error){
=======

    error.status = 404;

>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
    throw error
  }
}

<<<<<<< HEAD
module.exports = { getAllService, createService, updateService, removeService };
=======
module.exports = { getAllService, createService, updateService };
>>>>>>> 15d598eb5683e0f900e3a23f568abfa5d7d74865
