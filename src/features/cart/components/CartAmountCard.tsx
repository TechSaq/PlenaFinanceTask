import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { makeStyles } from '../../../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonZSR, Spacer, TextZSR } from '../../../library';

const CartAmountCard = () => {

  const styles = useStyles();

  return (
    <View style={styles.container}>

      <AmountRow label='Subtotal' amount='35.96' />
      <Spacer />
      <AmountRow label='Delivery' amount='2.00' />
      <Spacer />
      <AmountRow label='Total' amount='37.96' />

      <Spacer spacing={32} />

      <ButtonZSR>Proceed To checkout</ButtonZSR>

    </View>
  )
}

export default CartAmountCard;

type AmountRowProps = {
  label: string;
  amount: string;
}

const AmountRow = ({ label, amount }: AmountRowProps) => {

  const styles = useStyles();

  return (
    <View style={styles.amountRow} >
      <TextZSR themeKey='BLACK_60'>{label}</TextZSR>
      <TextZSR themeKey='BLACK_90' fontWeight='SemiBold'>${amount}</TextZSR>
    </View>
  )

}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.BLACK_10,
    paddingVertical: RFValue(24),
    paddingHorizontal: RFValue(24),
    borderRadius: RFValue(20)
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}))