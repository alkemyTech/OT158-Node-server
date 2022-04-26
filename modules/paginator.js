const getPageCondition = (page, size)=>{
  const limit = size ? size : 10;
  const offset = (page-1) * limit;
  return {limit,offset};
}

const parsePageResponse = (data, page, limit)=>{
  const { count, rows } = data;
  const totalPages = Math.ceil(count / limit);
  const previousPage = page != 1 ? `/categories?page=${page-1}` : null;
  const nextPage = page < totalPages ? `/categories?page=${page+1}` : null;
  return {data: rows, previousPage, nextPage, totalPages, itemsPerPage: limit}
}

module.exports = { getPageCondition, parsePageResponse};