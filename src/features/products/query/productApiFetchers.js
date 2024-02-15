import { ApiCall } from "../../../services/axiosGlobal";

const url = '/products';

export const getProducts = async ({
  signal,
  queryKey: [params = {}] = [],
  pageParam = 0,
} = {}) => {

  // const { pageSize = 10, category } = params;
  // const filters = { category };

  const { data } = await ApiCall.get(url, { signal });

  return data;
};
