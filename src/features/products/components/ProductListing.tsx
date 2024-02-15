import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useProductInfiniteQuery } from '../query';
import ProductListItem from './ProductListItem';
import { Spacer } from '../../../library';

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
  data: Product[]
}

const ProductListing = () => {

  const { data }: ProductQueryResult = useProductInfiniteQuery();

  return (
    <View>
      <FlatList
        data={data}
        horizontal={false}
        numColumns={2}
        ItemSeparatorComponent={Spacer}
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </View>
  )
}

export default ProductListing;