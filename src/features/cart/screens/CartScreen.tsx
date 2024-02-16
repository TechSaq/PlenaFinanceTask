import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScreenView, Spacer, TextZSR } from '../../../library'
import { CartAmountCard, CartListItem } from '../components'
import { makeStyles, useRefreshOnFocus } from '../../../hooks'
import { RFValue } from 'react-native-responsive-fontsize'
import { Product } from '../../products/components/ProductListing'
import { useCartItemInfiniteQuery } from '../query'
import { getTotal } from '../../../utils/helpers'

export type CartItem = Product & {
  qty: number
}

const CartScreen = () => {

  const styles = useStyles();

  const { data, refetch, isLoading, isFetching } = useCartItemInfiniteQuery();
  useRefreshOnFocus(refetch);

  const subTotal = getTotal(data.map((i: CartItem) => i.price * i.qty));

  return (
    <ScreenView scrollView={false} style={styles.container}>
      {
        data.length
          ? <>
            <FlatList
              data={data as unknown as CartItem[]}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => <CartListItem item={item} />}
              ListFooterComponent={() => <View style={styles.separator} />}
              style={{
                flexGrow: 0
              }}
            />

            <TextZSR
              fontSize={14}
              themeKey='PRIMARY'
              fontWeight='SemiBold'
              style={{ textAlign: 'right' }}
            >
              Edit
            </TextZSR>
          </>
          : <TextZSR>Cart is empty.</TextZSR>
      }


      <Spacer />

      <CartAmountCard subtotal={subTotal} />

    </ScreenView>
  )
}

export default CartScreen;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(24),
  },
  separator: {
    height: RFValue(1),
    backgroundColor: "#EBEBFB",
    marginVertical: RFValue(8)
  }
}))