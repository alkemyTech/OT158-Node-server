const repository = require('../repositories/members');
const { NotFound, BadRequest } = require("../utils/status")

const getAll = async (req) => {
  const { page } = req.query;

  const queryOptions = getPageSizeAndReadingStart(page);
  const { count , rows } = await repository.getAll(queryOptions);
  const { nextPage, currentPage, prevPage, totalPages } = getPagination(req, count, page, queryOptions['limit'])

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

const create = async (newMember) => {
  const memberCreationService = await repository.create(newMember);

  if (memberCreationService) {
    return memberCreationService;
  } else {
    const error = new Error('Record not found');
    error.status = NotFound;
    throw error
  }

};

const update = async (id, body) => {
  const member = await repository.getById(id);

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

const remove = async (id)=>{
  try{
    const user = await repository.getById(id);
    if(!user){
      const error = new Error('Member not found');
      error.status = NotFound;
      throw error;
    }

    return await repository.remove(id);
  }
  catch(error){
    throw error
  }
}

module.exports = { getAll, create, update, remove };

// funciones auxiliares
function getPageSizeAndReadingStart(page) {
  const limit = 10;//cantidad de registros por pagina
  return {
    limit,
    offset: page? (+page*limit) - limit : 0
  }
}

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