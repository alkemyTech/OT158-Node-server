const getPageCondition = (page=1, size)=>{
  const limit = size || 10;
  const offset = (page-1) * limit;
  return {limit,offset};
}

const parsePageResponse = (data, page, limit, model)=>{
  const { count, rows } = data;
  const totalPages = Math.ceil(count / limit);
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

module.exports = { getPageCondition, parsePageResponse};