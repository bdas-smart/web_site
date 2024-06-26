export const handlePaginationSort = ({
    pageNumber ,
    limit ,
    order ,
    orderBy = "createdAt",
   }: any) => {
    pageNumber = parseInt(pageNumber);
    limit = parseInt(limit);
    if (typeof pageNumber !== "number" || pageNumber < 1) {
      pageNumber = 1;
    }
  
    if (typeof limit !== "number" || limit < 0) {
      limit = 10;
    }
  
    const skip = (pageNumber - 1) * limit;
  
    if (order == "ASC" || order == "asc" || parseInt(order) == 1) {
      order = 1;
    } else {
      order = -1;
    }
  
    let sort = {};
    sort[`${orderBy}`] = order;
    return { order, skip, orderBy, limit, sort };
  };
  
 