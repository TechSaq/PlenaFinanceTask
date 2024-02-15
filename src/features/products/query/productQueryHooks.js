import {
  useInfiniteQuery,
} from '@tanstack/react-query';
import { AppConstants } from '../../../utils/AppConstants';
import { getProducts } from './productApiFetchers';
import { productQueryKeys } from './productQueryKeyFactory';

export const useProductInfiniteQuery = ({ select, payload } = {}) => {

  // can be implemented using Zustand
  // const productFilters = useProductFilters();
  payload = {};

  const { data, ...rest } = useInfiniteQuery({
    queryKey: productQueryKeys.listInfinite(payload),
    queryFn: getProducts,
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
      ? { select: _data => select(_data?.pages.flatMap(page => page.products)) }
      : {}),
  });

  return {
    data: select ? data : data?.pages.flatMap(page => page.products) || [],
    ...rest,
  };
};