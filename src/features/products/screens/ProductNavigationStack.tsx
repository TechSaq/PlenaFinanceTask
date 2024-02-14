import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from '../../../navigation'
import { SCREEN_CONSTANTS } from '../../../navigation/utils/constants'
import ProductDetailsScreen from './ProductDetailsScreen'
import ProductListScreen from './ProductListScreen'

const ProductNavigationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_CONSTANTS.ProductList}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name={SCREEN_CONSTANTS.ProductList}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={SCREEN_CONSTANTS.ProductDetails}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  )
}

export default ProductNavigationStack