const { getAll, create, getById, remove } = require('../repositories/members');
const { NotFound, BadRequest } = require("../utils/status")

const getAllService = async (req) => {
  const { page } = req.query;
  const LIMIT = 10;
  const offset = page? (+page*LIMIT) - LIMIT : 0;
  const { count , rows } = await getAll({limit: LIMIT, offset});

  const { nextPage, currentPage, prevPage, totalPages } = getPagination(req, count, page, LIMIT)

  return { 
    data: rows,
    total: count,
    pagination: {
      pages: totalPages,
      current: currentPage,
      next: nextPage,
      prev: prevPage
    }
   }
};

const createService = async (newMember) => {
  const memberCreationService = await create(newMember);

  if (memberCreationService) {
    return memberCreationService;
  } else {
    const error = new Error('Record not found');
    error.status = NotFound;
    throw error
  }

};

const updateService = async (id, body) => {
  const member = await getById({ where: { id: id } });

  if (member) {
    const memberUpdated = await member.update(body);

    if (memberUpdated) {
      return memberUpdated
    } else {
      const error = new Error('Bad Request');
      error.status = BadRequest;
      throw error
    }
  } else {
    const error = new Error('Record not found');
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
    throw error
  }
}

module.exports = { getAllService, createService, updateService, removeService };

// funciones auxiliares
function getPagination(req, count, page, limit) {
    
  const totalPages =  Math.ceil(count/limit);
  const currentPage = (page? +page : 1);
  
  const nextPage =  currentPage<totalPages ?
    `${req.protocol}://${req.get('host')}${req.baseUrl}/?page=${currentPage+1}` : null;
  const prevPage =  currentPage>1 ?
    `${req.protocol}://${req.get('host')}${req.baseUrl}/?page=${currentPage-1}` : null; 

  return { 
    totalPages,
    currentPage,
    nextPage,
    prevPage,
  };
}