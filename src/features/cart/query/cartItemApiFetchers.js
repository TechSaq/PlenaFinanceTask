import { addItemToCartLS, getItemsFromCartLS } from "../../../utils/LocalStorageHelpers";

export const getCartItems = async ({
  signal,
  queryKey: [params = {}] = [],
  pageParam = 0,
} = {}) => {


  // const { data } = await ApiCall.get(url, { signal });

  const data = await getItemsFromCartLS();

  return data;
};


export const addItemToCart = async ({ item, qty = 1 }) => {

  item = {
    ...item,
    qty
  }

  const data = await addItemToCartLS(item, qty);

  return item;
};

