import { View, Text } from 'react-native'
import React from 'react'
import { makeStyles } from '../../../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import { IconSvg, TextZSR } from '../../../library';
import { BasketIcon } from '../../../assets/icons';
import { HeaderBasketIcon } from '../../../components';

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

      <HeaderBasketIcon />

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
  }
}));