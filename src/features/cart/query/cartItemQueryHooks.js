import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
  useQuery
} from '@tanstack/react-query';
import { addItemToCart, getCartItems } from './cartItemApiFetchers';
import { cartItemQueryKeys } from './cartItemQueryKeyFactory';
import Toast from 'react-native-toast-message';
import { getItemsFromCartLS } from '../../../utils/LocalStorageHelpers';

export const useCartItemInfiniteQuery = ({ select, payload } = {}) => {

  // can be implemented using Zustand
  // const cartItemFilters = useCartItemFilters();
  payload = {};

  const { data, ...rest } = useInfiniteQuery({
    queryKey: cartItemQueryKeys.listInfinite(payload),
    queryFn: getCartItems,
    getNextPageParam: (lastPage, allPages) => {

      // based on some logic find if their is 
      // next page available or not
      // if available return the number
      // else return undefined

      // const nextPage =
      //   lastPage * AppConstants.API_PAGE_SIZE === allPages[0].total
      //     ? lastPage + 1
      //     : undefined;

      return undefined;
    },
    ...(select
      ? { select: _data => select(_data?.pages.flatMap(page => page)) }
      : {}),
  });

  return {
    data: select ? data : data?.pages.flatMap(page => page) || [],
    ...rest,
  };
};

export const useAddItemToCartMutation = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addItemToCart,
    onSuccess: async () => {
      // Toast.show({
      //   type: "success",
      //   text1: 'Item added to cart.'
      // });

      await queryClient.cancelQueries({ queryKey: cartItemQueryKeys.all });
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: 'Add item to cart failed.'
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cartItemQueryKeys.all });
    }
  })

}

export const useCartItemsCount = () => {

  const { data, ...rest } = useQuery({
    queryKey: cartItemQueryKeys.count(),
    queryFn: async () => {

      const itemsLS = await getItemsFromCartLS();

      return itemsLS.length;

    }
  });

  return { data, ...rest };

}

export const useUpdateCartItemCount = () => {

  const { data, ...rest } = useMutation({
    mutationFn: async ({ item, qtyToChange },) => {

      const itemsLS = await getItemsFromCartLS();

      const foundItem = itemsLS.find(i => i.id === item.id);

      if (foundItem) {

        const newQty = foundItem.qty + qtyToChange;

      }

    }
  })

}