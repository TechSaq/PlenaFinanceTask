//@ts-nocheck
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { makeStyles } from '../../../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import { IconSvg, Spacer, TextZSR } from '../../../library';
import { AddToCartPlusIcon, FavouriteProductIcon } from '../../../assets/icons';
import { Product } from './ProductListing';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_CONSTANTS } from '../../../navigation/utils/constants';
import { useAddItemToCartMutation } from '../../cart/query';
import { useFavouriteActions, useFavouriteState } from '../../favourite/store';

const ProductListItem = ({ product }: { product: Product }) => {

  const styles = useStyles();

  const navigation = useNavigation();

  const favItems = useFavouriteState();
  const { addToFavourite, removeFromFavourite } = useFavouriteActions();

  const isFavProduct = !!favItems.find(f => f.id === product.id);

  const { mutate: addItemToCart } = useAddItemToCartMutation();

  const navigateToProductDetails = () => {
    // TODO: add typescript for navigations
    navigation.navigate(SCREEN_CONSTANTS.ProductDetails, { product });
  }

  const handleAddToCart = () => {
    addItemToCart({ item: product });
  }

  const handleFavouriteAction = () => {
    isFavProduct ? removeFromFavourite(product) : addToFavourite(product);
  }

  return (
    <Pressable style={styles.container} onPress={navigateToProductDetails} >

      {/* background container added to favourite icon
          to make it visible on all kind of images.
      */}
      <Pressable
        style={styles.favouriteIconWrapper}
        onPress={handleFavouriteAction}
      >
        <IconSvg
          size={16}
          icon={FavouriteProductIcon}
          active={isFavProduct}
          showBackground={false}
        />
      </Pressable>

      <Image
        source={{ uri: product.thumbnail }}
        width={40}
        height={120}
        style={{
          width: '100%',
          objectFit: 'cover'
        }}
      />

      <Spacer spacing={12} />

      <View style={styles.infoWrapper} >
        <View style={{ flex: 1 }} >
          <TextZSR fontSize={14} fontWeight='SemiBold' >${product.price}</TextZSR>
          <Spacer spacing={4} />
          <TextZSR fontSize={12}>{product.title}</TextZSR>
        </View>

        <Pressable onPress={handleAddToCart} >
          <IconSvg
            icon={AddToCartPlusIcon}
            showBackground={false}
            active
          />
        </Pressable>

      </View>

    </Pressable>
  )
}

export default ProductListItem;

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    padding: RFValue(12),
    backgroundColor: theme.colors.BLACK_10,
    flex: 1,
    marginHorizontal: RFValue(4),
    borderRadius: RFValue(12)
  },
  favouriteIconWrapper: {
    position: 'absolute',
    top: RFValue(6),
    left: RFValue(6),
    zIndex: 1000,
    backgroundColor: theme.colors.BLACK_10,
    padding: RFValue(8),
    borderRadius: RFValue(100)
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}))