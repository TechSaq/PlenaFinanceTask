import { View, Text, useWindowDimensions, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { RFValue } from 'react-native-responsive-fontsize';
import { IconSvg } from '../../../library';
import { ImageIcon } from '../../../assets/icons';
import { makeStyles } from '../../../hooks';

const IMAGE_HEIGHT = RFValue(240)

type ProductGalleryCarouselProps = {
  images: string[]
}

const ProductGalleryCarousel = ({ images }: ProductGalleryCarouselProps) => {

  const carouselRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const { width } = useWindowDimensions();

  const styles = useStyles({ width });

  const _renderItem = ({ item, index }: { item: string, index: number }) => {
    return (
      <View key={index} style={styles.imageWrapper} >
        {
          item
            ? <Image
              source={{ uri: item }}
              width={width}
              height={IMAGE_HEIGHT}
              style={{
                objectFit: 'contain',
              }}
            />
            : <IconSvg
              icon={ImageIcon}
              size={60}
              showBackground={false}
              containerStyle={styles.imagePlaceholder}
            />
        }

      </View>
    )
  }

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={setActiveIndex}
        activeSlideAlignment='start'
        // inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      <View>
        <GalleryCarouselPagination
          length={images.length}
          activeDotIndex={activeIndex}
        />
      </View>
    </View>
  )
}

export default ProductGalleryCarousel;

type GalleryCarouselPaginationProps = {
  length: number;
  activeDotIndex: number;
}

//TODO: add onPress to dot item and slide to that image
const GalleryCarouselPagination = ({ length, activeDotIndex }: GalleryCarouselPaginationProps) => {

  return (
    <Pagination
      dotsLength={length}
      activeDotIndex={activeDotIndex}
      containerStyle={{
        position: 'absolute',
        bottom: RFValue(-10),
        left: 0
      }}
      dotStyle={{
        width: RFValue(20),
        height: RFValue(4),
        borderRadius: RFValue(100),
        backgroundColor: '#F9B023'
      }}
      inactiveDotStyle={{
        // Define styles for inactive dots here
        backgroundColor: '#E4E4E4'

      }}
      inactiveDotOpacity={1}
      inactiveDotScale={1}
    />
  )

}

const useStyles = makeStyles((theme, { width }) => ({
  imageWrapper: {
    width: width,
    height: IMAGE_HEIGHT - 60,
    backgroundColor: theme.colors.BLACK_10,
    justifyContent: 'center',
  },
  imagePlaceholder: {
    alignSelf: 'center',
    marginBottom: RFValue(24)
  }
}))