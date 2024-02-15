import { View, Text, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import Carousel from 'react-native-snap-carousel';
import { OfferCard } from '../../../components';
import { RFValue } from 'react-native-responsive-fontsize';

const offers = [
  {
    id: 1,
    titles: ['Get', '50% OFF', 'On first 03 order'],
    image: 'https://images.unsplash.com/photo-1542992015-4a0b729b1385?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    titles: ['Grab', '20% OFF', 'On Electronics'],
    image: ''
  },
  {
    id: 3,
    titles: ['Save', '5% OFF', 'On VISA card'],
    image: ''
  }
]

const ProductOfferCarousel = () => {

  const carouselRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const { width } = useWindowDimensions();

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={offers}
        renderItem={({ item, index },) => <OfferCard item={item} active={index === activeIndex} />}
        sliderWidth={width}
        itemWidth={RFValue(300)}
        onSnapToItem={setActiveIndex}
        activeSlideAlignment='start'
        // inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
    </View>
  )
}

export default ProductOfferCarousel