import { View, Text } from 'react-native'
import React from 'react'
import { makeStyles } from '../../../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import { IconSvg, TextZSR } from '../../../library';
import { BasketIcon } from '../../../assets/icons';

const HomeHeader = () => {

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TextZSR
        fontSize={22}
        themeKey='BLACK_1'
        fontWeight='SemiBold'
      >
        Hey, Rahul
      </TextZSR>

      <View style={styles.cartWrapper} >
        <IconSvg
          icon={BasketIcon}
          size={20}
          active
          containerStyle={styles.basketIcon}
          showBackground={false}
        />
        <View style={styles.badgeWrapper} >
          <TextZSR fontSize={12} themeKey='BLACK_1'>3</TextZSR>
        </View>
      </View>

    </View>
  )
}

export default HomeHeader;

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.PRIMARY,
    paddingHorizontal: RFValue(16),
    paddingTop: RFValue(24),
    paddingBottom: RFValue(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartWrapper: {
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
}));