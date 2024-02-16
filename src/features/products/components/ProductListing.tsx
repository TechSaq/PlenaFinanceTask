import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useProductInfiniteQuery } from '../query';
import ProductListItem from './ProductListItem';
import { Spacer, TextZSR } from '../../../library';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type ProductQueryResult = {
  data: Product[],
  isLoading: boolean
}

const ProductListing = () => {

  const { data, isLoading, isFetching } = useProductInfiniteQuery();


  return (
    <View>
      {/* {
        isLoading ? <TextZSR>Loading...</TextZSR> : null
      }
      {
        isFetching ? <TextZSR> isFetching...</TextZSR> : null
      } */}
      <FlatList
        data={data}
        horizontal={false}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ItemSeparatorComponent={Spacer}
        renderItem={({ item }) => <ProductListItem product={item} />}

      />
    </View>
  )
}

export default ProductListing;