import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { makeStyles } from '../../../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonZSR, Spacer, TextZSR } from '../../../library';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorageConstants } from '../../../utils/LocalStorageHelpers';
import { getTotal } from '../../../utils/helpers';

const CartAmountCard = ({ subtotal }: { subtotal: string }) => {

  const styles = useStyles();

  const delivery = Number(subtotal) ? '3.00' : '0.00';
  const total = getTotal([subtotal, delivery]);

  return (
    <View style={styles.container}>

      <AmountRow label='Subtotal' amount={subtotal} />
      <Spacer />
      <AmountRow label='Delivery' amount={delivery} />
      <Spacer />
      <AmountRow label='Total' amount={total} />

      <Spacer spacing={32} />

      <ButtonZSR>
        Proceed To checkout
      </ButtonZSR>

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