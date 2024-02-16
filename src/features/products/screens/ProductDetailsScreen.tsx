//@ts-nocheck
import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Product } from '../components/ProductListing';
import { ButtonZSR, IconSvg, ScreenView, Spacer, TextZSR } from '../../../library';
import { makeStyles } from '../../../hooks';
import { RFValue } from 'react-native-responsive-fontsize';
import StarRating from 'react-native-star-rating-widget';
import { ProductGalleryCarousel } from '../components';
import { FavouriteProductIcon } from '../../../assets/icons';
import { getDiscount } from '../../../utils/helpers';
import { useAddItemToCartMutation } from '../../cart/query';
import { SCREEN_CONSTANTS } from '../../../navigation/utils/constants';
import { getItemsFromCartLS } from '../../../utils/LocalStorageHelpers';

const ProductDetailsScreen = () => {

  const styles = useStyles();

  const { params } = useRoute();
  const { product } = params as { product: Product };

  const navigation = useNavigation();

  const { mutate: addItemToCart } = useAddItemToCartMutation();

  if (!product) {
    return <TextZSR>Product details not found</TextZSR>
  }

  const discount = getDiscount(product.price, product.discountPercentage);

  const handleAddToCart = () => {
    addItemToCart({ item: product });
  }

  const handleBuyNow = async () => {

    const itemsLS = await getItemsFromCartLS();

    const isItemInCart = itemsLS.find(i => i.id === product.id);

    if (isItemInCart) {
      navigation.navigate(SCREEN_CONSTANTS.Cart);
    } else {
      handleAddToCart();
      navigation.navigate(SCREEN_CONSTANTS.Cart);
    }

  }


  return (
    <ScreenView style={styles.container}>

      <View style={styles.titleContainer} >
        <TextZSR fontSize={30} fontWeight='Regular'>{product.brand}</TextZSR>
        <TextZSR fontSize={30} fontWeight='ExtraBold'>{product.title}</TextZSR>
        <View style={styles.starReviewContainer} >
          <StarRating
            rating={product.rating}
            onChange={() => null}
            starSize={20}
            color='#F9B023'
            starStyle={{ marginHorizontal: 0 }}
          />
          <TextZSR fontSize={14} themeKey='BLACK_45'>110 Reviews</TextZSR>
        </View>
      </View>

      <Spacer />

      <View>
        <Pressable style={styles.favouriteIconWrapper} >
          <IconSvg
            size={16}
            icon={FavouriteProductIcon}
            active={false}
            showBackground={false}
          />
        </Pressable>
        <ProductGalleryCarousel images={product.images} />
      </View>

      <Spacer spacing={24} />

      <View style={styles.bottomWrapper}>

        {/* prices */}
        <View style={styles.priceWrapper} >
          <TextZSR
            fontSize={20}
            fontWeight='Bold'
            themeKey='PRIMARY'>
            ${product.price}
          </TextZSR>
          <TextZSR
            fontSize={12}
            themeKey='BLACK_1'
            style={styles.discount}
          >
            ${discount} OFF
          </TextZSR>
        </View>

        <Spacer spacing={32} />

        {/* buttons */}
        <View style={styles.buttonWrapper} >
          <ButtonZSR mode='outline' onPress={handleAddToCart} >Add To Cart</ButtonZSR>
          <ButtonZSR onPress={handleBuyNow} >Buy Now</ButtonZSR>
        </View>

        <Spacer spacing={32} />
        <TextZSR fontSize={18}>Details</TextZSR>
        <Spacer />
        <TextZSR themeKey='BLACK_60'>{product.description}</TextZSR>

      </View>

      <Spacer spacing={48} />

    </ScreenView>
  )
}

export default ProductDetailsScreen;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: RFValue(16),
  },
  titleContainer: {
    paddingHorizontal: RFValue(24),
  },
  starReviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(4)
  },
  favouriteIconWrapper: {
    position: 'absolute',
    top: RFValue(20),
    right: RFValue(12),
    zIndex: 1000,
    backgroundColor: theme.colors.BLACK_1,
    padding: RFValue(8),
    borderRadius: RFValue(12)
  },
  bottomWrapper: {
    paddingHorizontal: RFValue(24),
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(12),
  },
  discount: {
    backgroundColor: theme.colors.PRIMARY_1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: RFValue(100),
    paddingTop: RFValue(3),
    paddingHorizontal: RFValue(12),
    height: RFValue(24)
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: RFValue(24),
  }
}))