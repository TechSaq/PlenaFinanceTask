import { create } from "zustand";
import { Product } from "../products/components/ProductListing";

interface FavouriteState {
  items: Product[]
  actions: {
    addToFavourite: (item: Product) => void,
    removeFromFavourite: (item: Product) => void,
  }
}


const useFavouriteStore = create<FavouriteState>((set) => ({
  items: [],
  actions: {
    addToFavourite: (item) => set((state) => ({ items: [item, ...state.items] })),
    removeFromFavourite: (item) => set((state) => ({ items: state.items.filter(i => i.id !== item.id) })),
  }
}));

export const useFavouriteState = () => useFavouriteStore(state => state.items);
export const useFavouriteActions = () => useFavouriteStore(state => state.actions); 