import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ScreenView, Spacer, TextZSR } from '../../../library'
import { makeStyles } from '../../../hooks'
import { RFValue } from 'react-native-responsive-fontsize'
import { ProductListItem } from '../../products'
import { useFavouriteState } from '../store'

const FavouriteListScreen = () => {

  const styles = useStyles();

  const favItems = useFavouriteState()

  return (
    <ScreenView style={styles.container}>
      <FlatList
        data={favItems.map(f => ({ ...f, isFavourite: true }))}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={Spacer}
        ListEmptyComponent={() => <TextZSR>No favourite items.</TextZSR>}
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </ScreenView>
  )
}

export default FavouriteListScreen;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingHorizontal: RFValue(24),
    paddingVertical: RFValue(16),
  }
}));
