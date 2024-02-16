import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartItem } from "../features/cart/screens/CartScreen";
import Toast from "react-native-toast-message";

export const LocalStorageConstants = {
  APP_THEME_MODE: 'appThemeMode',
  CART_ITEMS: 'cartItems'
}

export const LocalStorage = {
  getItem: async <T>(key: string, defaultValue: any = null) => {
    let value = await AsyncStorage.getItem(key) as string;
    let parsedValue = JSON.parse(value) as T;
    parsedValue = parsedValue == undefined ? defaultValue : parsedValue;
    return parsedValue;
  },
  setItem: async <T>(key: string, value: T) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
};


export const getItemsFromCartLS = async <T>() => {

  const itemsLS = await LocalStorage.getItem<T>(LocalStorageConstants.CART_ITEMS, []);

  return itemsLS;

}

export const addItemToCartLS = async (item: CartItem, qty = 1) => {

  // get all items
  const cartItemsLS = await getItemsFromCartLS<CartItem[]>();

  // result cart items
  let updatedItems = cartItemsLS;

  // find the item
  const foundItem = cartItemsLS.find(i => i.id === item.id);

  if (foundItem) {
    // item is already present
    // update the quantity

    updatedItems = cartItemsLS.map(i => i.id === item.id ? ({ ...foundItem, qty: foundItem.qty + qty }) : i);

  } else {
    // new item is being added
    updatedItems = [item, ...cartItemsLS];
    Toast.show({
      type: "success",
      text1: `${item.title} added to cart.`
    });
  }

  // filter out if qty<=0
  updatedItems = updatedItems.filter(i => i.qty >= 1);

  await LocalStorage.setItem<CartItem[]>(LocalStorageConstants.CART_ITEMS, updatedItems);

  return updatedItems;
}

export const removeItemFromCartLS = async (itemId: number | string) => {

  const cartItemsLS = await getItemsFromCartLS<CartItem[]>();

  const filteredItems = cartItemsLS.filter(item => item.id !== itemId);

  await LocalStorage.setItem(LocalStorageConstants.CART_ITEMS, filteredItems);

  return filteredItems;
}

export const updateItemInCartLS = async (item: CartItem) => {

  const cartItemsLS = await getItemsFromCartLS<CartItem[]>();

  const updatedItems = cartItemsLS.map(i => i.id === item.id ? { ...i, ...item } : i);

  await LocalStorage.setItem(LocalStorageConstants.CART_ITEMS, updatedItems);

  return updatedItems;

}