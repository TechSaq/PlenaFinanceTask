import { View, Text } from 'react-native'
import React from 'react';
import { HomeHeader } from '../../home';
import { ScreenView, SearchInput, TextZSR, IconSvg } from '../../../library';
import { makeStyles } from '../../../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import { DropdownIcon, MoreVerticalIcon } from '../../../assets/icons'

const ProductListScreen = () => {

  const styles = useStyles();

  return (
    <ScreenView>
      <HomeHeader />
      <View style={styles.topContainer}>
        <SearchInput />

        {/* Delivery Details */}
        <View style={styles.deliveryContainer}>

          {/* TODO: can be made a component */}
          <View>
            <TextZSR fontSize={11} fontWeight='Bold' themeKey='TAB_BAR_TEXT'>DELIVERY TO</TextZSR>
            <View style={styles.dropdownContainer}>
              <TextZSR fontSize={14} themeKey='BLACK_1'>Green Way 300, Sylhet</TextZSR>
              <IconSvg icon={DropdownIcon} size={11} active showBackground={false} />
            </View>
          </View>

          <View>
            <TextZSR fontSize={11} fontWeight='Bold' themeKey='TAB_BAR_TEXT'>WITHIN</TextZSR>
            <View style={styles.dropdownContainer}>
              <TextZSR fontSize={14} themeKey='BLACK_1'>1 hour</TextZSR>
              <IconSvg icon={DropdownIcon} size={11} active showBackground={false} />
            </View>
          </View>

        </View>

      </View>
    </ScreenView>
  )
}

export default ProductListScreen;

const useStyles = makeStyles((theme) => ({
  topContainer: {
    backgroundColor: theme.colors.PRIMARY,
    alignItems: 'center',
    paddingBottom: RFValue(20),
    paddingHorizontal: RFValue(16),
    paddingTop: RFValue(24)
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: RFValue(24)
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(8)
  }
}))