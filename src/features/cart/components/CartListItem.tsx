//@ts-nocheck
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { type Product } from '../../products/components/ProductListing'
import { makeStyles } from '../../../hooks'
import { RFValue } from 'react-native-responsive-fontsize'
import { TextZSR } from '../../../library'
import CartItemQuantity from './CartItemQuantity'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_CONSTANTS } from '../../../navigation/utils/constants'
import { CartItem } from '../screens/CartScreen'

type CartListItemProps = {
  item: CartItem
}

const CartListItem = ({ item }: CartListItemProps) => {

  const styles = useStyles();

  const navigation = useNavigation();

  const navigateToProductDetails = () => {
    navigation.navigate(SCREEN_CONSTANTS.ProductDetails, { product: item })
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.thumbnail }}
        width={RFValue(60)}
        height={RFValue(40)}
        style={{ objectFit: 'cover', borderRadius: RFValue(4) }}
      />
      <Pressable onPress={navigateToProductDetails} style={{ flex: 1 }} >
        <TextZSR fontWeight='SemiBold' fontSize={14} numberOfLines={1} >{item.title}</TextZSR>
        <TextZSR fontSize={14}>${item.price}</TextZSR>
      </Pressable>

      <CartItemQuantity item={item} />
    </View>
  )
}

export default CartListItem;

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(12),
    paddingVertical: RFValue(10),
  }
}))