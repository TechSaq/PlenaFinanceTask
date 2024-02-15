import { View, Text } from 'react-native'
import React from 'react'
import { IconSvg, TextZSR } from '../../../library'
import { MinusCartIcon, PlusCartIcon } from '../../../assets/icons'
import { makeStyles } from '../../../hooks'
import { RFValue } from 'react-native-responsive-fontsize'

const CartItemQuantity = () => {

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <IconSvg
        icon={MinusCartIcon}
        size={40}
        showBackground={false}
      />
      <TextZSR fontWeight='SemiBold'>3</TextZSR>
      <IconSvg
        icon={PlusCartIcon}
        size={40}
        showBackground={false}
      />
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