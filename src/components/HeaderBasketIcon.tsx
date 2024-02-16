//@ts-nocheck
import { Pressable, View } from 'react-native'
import React from 'react'
import { IconSvg, TextZSR } from '../library'
import { BasketIcon } from '../assets/icons'
import { makeStyles, useRefreshOnFocus } from '../hooks'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_CONSTANTS } from '../navigation/utils/constants'
import { useCartItemsCount } from '../features/cart/query'

type HeaderBasketIconProps = {
  active?: boolean
}

//TODO: on press navigate
// show real count of cart items
const HeaderBasketIcon = ({ active = true }: HeaderBasketIconProps) => {

  const styles = useStyles();

  const navigation = useNavigation();

  const { data: count, refetch } = useCartItemsCount();
  useRefreshOnFocus(refetch);

  const navigateToCart = () => {
    // TODO: better typescript
    navigation.navigate(SCREEN_CONSTANTS.Cart);
  }

  return (
    <Pressable style={styles.container} onPress={navigateToCart} >
      <IconSvg
        icon={BasketIcon}
        size={20}
        active={active}
        containerStyle={styles.basketIcon}
        showBackground={false}
      />
      {
        count
          ? <View style={styles.badgeWrapper}>
            <TextZSR fontSize={12} themeKey='BLACK_1'>{count}</TextZSR>
          </View>
          : null
      }
    </Pressable>
  )
}

export default HeaderBasketIcon;

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  basketIcon: {
    backgroundColor: "transparent"
  },
  badgeWrapper: {
    position: 'absolute',
    right: RFValue(-8),
    top: RFValue(-8),
    backgroundColor: theme.colors.SECONDARY,
    borderRadius: RFValue(100),
    width: RFValue(20),
    height: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
}))