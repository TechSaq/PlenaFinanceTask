import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { IconSvg, TextZSR } from '../../../library'
import { MinusCartIcon, PlusCartIcon } from '../../../assets/icons'
import { makeStyles } from '../../../hooks'
import { RFValue } from 'react-native-responsive-fontsize'
import { CartItem } from '../screens/CartScreen'
import { useAddItemToCartMutation } from '../query'

type CartItemQuantityProps = {
  item: CartItem
}

const CartItemQuantity = ({ item }: CartItemQuantityProps) => {

  const styles = useStyles();

  const { mutate: updateCartItem } = useAddItemToCartMutation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => updateCartItem({ item, qty: -1 })} >
        <IconSvg
          icon={MinusCartIcon}
          size={40}
          showBackground={false}
        />
      </Pressable>

      <TextZSR fontWeight='SemiBold'>{item.qty}</TextZSR>
      <Pressable onPress={() => updateCartItem({ item, qty: 1 })} >
        <IconSvg
          icon={PlusCartIcon}
          size={40}
          showBackground={false}
        />
      </Pressable>
    </View>
  )
}

export default CartItemQuantity;

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(8),
  }
}))