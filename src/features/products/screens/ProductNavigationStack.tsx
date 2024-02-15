import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Stack } from '../../../navigation'
import { SCREEN_CONSTANTS } from '../../../navigation/utils/constants'
import ProductDetailsScreen from './ProductDetailsScreen'
import ProductListScreen from './ProductListScreen'
import { IconSvg } from '../../../library'
import { BackIcon, BasketIcon, HomeIcon } from '../../../assets/icons'
import { HeaderBasketIcon } from '../../../components'
import { RFValue } from 'react-native-responsive-fontsize'
import { CartScreen } from '../../cart'

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
        initialParams={{ product: null }}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: (props) => {
            return (
              <Pressable onPress={props.onPress} >
                <IconSvg
                  icon={BackIcon}
                  size={40}
                />
              </Pressable>
            )
          },
          headerRight: (props) => {
            return (
              <HeaderBasketIcon active={false} />
            )
          },
          headerStyle: {
            height: RFValue(64),
          },
          headerLeftContainerStyle: {
            paddingTop: RFValue(20)
          },
          headerRightContainerStyle: {
            paddingTop: RFValue(20),
            paddingRight: RFValue(24),
            marginTop: RFValue(4)
          }
        }}
      />
      <Stack.Screen
        name={SCREEN_CONSTANTS.Cart}
        component={CartScreen}
        initialParams={{ products: [] }}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Shopping Cart',
          headerLeft: (props) => {
            return (
              <Pressable onPress={props.onPress} >
                <IconSvg
                  icon={BackIcon}
                  size={40}
                />
              </Pressable>
            )
          },
          headerStyle: {
            height: RFValue(64),
          },
          headerLeftContainerStyle: {
            paddingTop: RFValue(20)
          },
          headerTitleContainerStyle: {
            paddingTop: RFValue(20),
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default ProductNavigationStack