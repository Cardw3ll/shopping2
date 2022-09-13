import { StyleSheet, View, Text, Button } from 'react-native'
import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayProduct } from './redux/restaurentGallery'
import { db } from './firebase';
import { collection, getDocs, query } from 'firebase/firestore'
const axios = require('axios')


const data = [
  {
      id: 1, category: 't-shirts', gallery: [
          {
              id: 1, image: require('../assets/clothes/1t.jpg'), itemType: 'cereal', price: '75.00',
             
          },
          {
              id: 2, image: require('../assets/clothes/2t.jpg'), itemType: 'Pancake', price: '70.00',
             
          },
          {
              id: 3, image: require('../assets/clothes/3t.webp'),itemType: 'Cappuccino', price: '55.00',
         
          },
      ]
  },
  {
      id: 2, category: 'pants', gallery: [
          {
              id: 1, image: require('../assets/clothes/1p.jpg'), itemType: 'Pants', price: '35.00',
         
          },
          {
              id: 2, image:require('../assets/clothes/2p.jpg'), itemType: 'Pants', price: '70.00',
              
          },
          {
              id: 3, image: require('../assets/clothes/3p.webp'), itemType: 'Pants', price: '60.00',
             
          },
      ]
  },
  {
      id: 3, category: 'shoes', gallery: [
          {
              id: 1, image: require('../assets/clothes/1s.jpg'), itemType: 'shoes', price: '40.00',
              
          },
          {
              id: 2, image: require('../assets/clothes/2s.jpg'), itemType: 'shoes', price: '35.00',
             
          },
          {
              id: 3, image: require('../assets/clothes/s3.jpg'),itemType: 'shoes', price: '34.00',
            
          },
      ]
  },
 

]

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { dataGallary: data, category: [], imageGallery:[] }
  }

  searchProduct() {
    console.log(this.state.dataGallary)
    console.log(this.state.dataGallary.gallery)

  }

  render() {
    this.allProfucts()
    return (
      <View style={styles.categories}>
        <Button onPress={() => this.searchProduct('hjdhjd')}>get values</Button>
        {this.state.category.map((cat, xid) => (
          <View key={xid}>
            <Text style={styles.categoryText} onPress={() => this.searchProduct(cat.catName)}>{cat.category}</Text>
          </View>
        ))}
      </View>
    )

  }


}

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  categoryText: {
    margin: 15
  },
})