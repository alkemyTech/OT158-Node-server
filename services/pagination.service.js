const getPageCondition = (page, size)=>{
  const limit = size || 10;
  const offset = page && page > 0 ? (page-1) * limit : 0;
  return {limit,offset};
}

const parsePageResponse = (rawData,paginatedData, page, limit, model)=>{
  const count = rawData.length;
  const totalPages = Math.ceil(count / limit);
  if (!page  || page > totalPages || page < 1) return false;
  const previousPage = page > 1 ? `/${model}?page=${page - 1}` : null;
  const nextPage = page < totalPages ? `/${model}?page=${+page + 1}` : null;
  return {
    currentPage:page,
    totalPages,
    totalItems: count,
    itemsPerPage: limit,
    data:paginatedData,
    previousPage,
    nextPage,
  };
}

const getPage = async (model,repository,page)=>{
  try {
    const conditions = getPageCondition(page);
    const rawPaginated = await repository.getAll(conditions);
    const totalOfResult = await repository.getAll()

    const paginated = parsePageResponse(totalOfResult,rawPaginated,page,conditions.limit,model);

    if (!paginated) return getPage(model,repository,1);

    return paginated;
  } catch (error) {
    throw error;
  }
}

module.exports = { getPageCondition, parsePageResponse, getPage};

