const getPagination = (page, size) => {
  const limit = size || 100;
  const offset = page ? (page - 1) * limit : 0;

  return { limit, offset };
};
const getPagingData = (data, page, limit) => {
  const { count: total, rows: result } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(total / limit);

  return { total, result, totalPages, currentPage };
};
module.exports = {
  getPagination,
  getPagingData
};
