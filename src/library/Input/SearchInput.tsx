import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { makeStyles } from '../../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import { IconSvg } from '../Icon';
import { SearchIcon } from '../../assets/icons';
import { FONTS } from '../../utils/fonts';

type SearchInput = TextInputProps

const SearchInput = ({ value }: SearchInput) => {

  const styles = useStyles();

  return (
    <View style={styles.container} >
      <IconSvg
        icon={SearchIcon}
        active
        showBackground={false}
        containerStyle={styles.searchIcon}
      />
      <TextInput
        value={value}
        placeholder='Search Products or store'
        style={styles.textInput}
        placeholderTextColor={styles.placeholderTextColor.backgroundColor}
      />
    </View>
  )
}

export default SearchInput;

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.PRIMARY_1,
    borderRadius: RFValue(100),
    paddingHorizontal: RFValue(8),
    height: RFValue(50)
  },
  textInput: {
    flex: 1,
    fontSize: RFValue(14),
    fontFamily: FONTS.Manrope.ManropeMedium,
    color: theme.colors.BLACK_10
  },
  placeholderTextColor: {
    backgroundColor: theme.colors.TAB_BAR_TEXT
  },
  searchIcon: {
    padding: RFValue(12)
  }
}))