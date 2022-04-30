const getPageCondition = (page=1, size)=>{
  const limit = size || 10;
  const offset = (page-1) * limit;
  return {limit,offset};
}

const parsePageResponse = (data, page, limit, model)=>{
  const { count, rows } = data;
  const totalPages = Math.ceil(count / limit);
  if (page > totalPages) return false;
  const previousPage = page > 1 ? `/${model}?page=${page-1}` : null;
  const nextPage = page < totalPages ? `/${model}?page=${page+1}` : null;
  return {
    data: rows,
    previousPage,
    nextPage,
    totalPages,
    totalItems: count,
    itemsPerPage: limit,
  };
}

const getPage = async (model,repository,page)=>{
  try {
    const conditions = getPageCondition(page);
  
    const rawPaginated = await repository.getPage(conditions);
  
    const paginated = parsePageResponse(rawPaginated,page,conditions.limit,model);
  
    if (!paginated) return getPage(model,repository,1);
  
    return paginated;
  } catch (error) {
    throw error;    
  }
}

module.exports = { getPageCondition, parsePageResponse, getPage};