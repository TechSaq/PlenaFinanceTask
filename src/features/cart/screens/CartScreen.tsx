import { FlatList, View } from 'react-native'
import React from 'react'
import { ScreenView, Spacer, TextZSR } from '../../../library'
import { CartAmountCard, CartListItem } from '../components'
import { makeStyles } from '../../../hooks'
import { RFValue } from 'react-native-responsive-fontsize'

const CartScreen = () => {

  const styles = useStyles();

  return (
    <ScreenView scrollView={false} style={styles.container}>
      <FlatList
        data={products}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <CartListItem item={item} />}
        ListFooterComponent={() => <View style={styles.separator} />}
        style={{
          flexGrow: 0
        }}
      />

      <TextZSR
        fontSize={14}
        themeKey='PRIMARY'
        fontWeight='SemiBold'
        style={{ textAlign: 'right' }}
      >
        Edit
      </TextZSR>

      <Spacer />

      <CartAmountCard />

    </ScreenView>
  )
}

export default CartScreen;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(24),
  },
  separator: {
    height: RFValue(1),
    backgroundColor: "#EBEBFB",
    marginVertical: RFValue(8)
  }
}))

const products = [
  {
    "id": 23,
    "title": "Orange Essence Food Flavou",
    "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    "price": 14,
    "discountPercentage": 8.04,
    "rating": 4.85,
    "stock": 26,
    "brand": "Baking Food Items",
    "category": "groceries",
    "thumbnail": "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/23/1.jpg",
      "https://cdn.dummyjson.com/product-images/23/2.jpg",
      "https://cdn.dummyjson.com/product-images/23/3.jpg",
      "https://cdn.dummyjson.com/product-images/23/4.jpg",
      "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg"
    ]
  },
  {
    "id": 24,
    "title": "cereals muesli fruit nuts",
    "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    "price": 46,
    "discountPercentage": 16.8,
    "rating": 4.94,
    "stock": 113,
    "brand": "fauji",
    "category": "groceries",
    "thumbnail": "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/24/1.jpg",
      "https://cdn.dummyjson.com/product-images/24/2.jpg",
      "https://cdn.dummyjson.com/product-images/24/3.jpg",
      "https://cdn.dummyjson.com/product-images/24/4.jpg",
      "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg"
    ]
  },
  {
    "id": 25,
    "title": "Gulab Powder 50 Gram",
    "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    "price": 70,
    "discountPercentage": 13.58,
    "rating": 4.87,
    "stock": 47,
    "brand": "Dry Rose",
    "category": "groceries",
    "thumbnail": "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/25/1.png",
      "https://cdn.dummyjson.com/product-images/25/2.jpg",
      "https://cdn.dummyjson.com/product-images/25/3.png",
      "https://cdn.dummyjson.com/product-images/25/4.jpg",
      "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
    ]
  },
  {
    "id": 26,
    "title": "Plant Hanger For Home",
    "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    "price": 41,
    "discountPercentage": 17.86,
    "rating": 4.08,
    "stock": 131,
    "brand": "Boho Decor",
    "category": "home-decoration",
    "thumbnail": "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
    "images": [
      "https://cdn.dummyjson.com/product-images/26/1.jpg",
      "https://cdn.dummyjson.com/product-images/26/2.jpg",
      "https://cdn.dummyjson.com/product-images/26/3.jpg",
      "https://cdn.dummyjson.com/product-images/26/4.jpg",
      "https://cdn.dummyjson.com/product-images/26/5.jpg",
      "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
    ]
  },
]