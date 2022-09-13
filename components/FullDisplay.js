import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { addedToCart } from './redux/restaurentGallery'
import {increment, amountIncrement } from './redux/counter';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import NavBar from './NavBar';

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
const category = [
    { id: 1, catName: 'All' },
    { id: 2, catName: 't-shirt' },
    { id: 3, catName: 'pants' },
    { id: 4, catName: 'shoes' },
  

]
function FullDisplay({route}) {

    const {data} = route.params;
    const [dataSource] = useState(data)

    const dispatch = useDispatch();

    function addToCart(data) {
        dispatch(addedToCart(data))
        dispatch(increment())
		dispatch(amountIncrement(data.price))
    }

    function searchProduct(itemWord) {
        var filterProduct
        filterProduct = dataSource.filter((value) => {
            return value.ingredient.toLowerCase().includes(itemWord.toLowerCase());
        })

        if (itemWord === 'All') filterProduct = dataSource

        console.log(filterProduct)
    }
    return (
        <View>
            <Header></Header>
            <View style={styles.image}>
                <Image source={dataSource.gallery[0].image} style={styles.mainImage} />
            </View>
            <NavBar/>
            <View style={styles.categories}>
                {category.map((cat, xid) => (
                    <View key={xid}>
                        <Text style={styles.categoryText} onPress={() => searchProduct(cat.catName)}>{cat.catName}</Text>
                    </View>

                ))}
          
            </View>

            <View style={styles.gallaryView} >
                <ScrollView>
                    {dataSource.gallery.map((data, xid) => (
                        <View style={styles.viewItem} key={xid}>
                            <View style={styles.itemImage}>
                                <Image source={data.image} style={styles.singlImageItem} />
                            </View>
                            <View style={styles.description}>
                                <Text style={styles.price}>R {data.price}</Text>
                                <View >
                                    <Text style={styles.name}>{data.itemType}</Text>
                                    
                                </View>
                            </View>
                            <View style={styles.addCart} >
                                <Text style={styles.addToCart} onPress={() => addToCart(data)}>+</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // header: {
    //     marginTop: 30,
    //     borderWidth: 1,
    // },
    image: {
        marginTop: 30,
        height: 128,
    },
    mainImage: { width: '100%', height: '100%' },
    brewarText: {
        fontSize: 20,
        color: 'white',
    },

    categories: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    categoryText: {
        margin: 15
    },
    gallaryView: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    viewItem: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        width: '100%',
        margin: 4,
    },
    itemImage: {
        height: 128,
        width: '45%'
    },
    singlImageItem: {
        height: '100%',
        width: '100%',

    },
    description: {
        marginTop: 25,
        width: '45%',
        marginLeft: 5
    },
    price: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    addCart: {
        textAlign: 'right'
    },
    addToCart: {
        fontSize: 25,
        marginTop: -5
    }
})
export default FullDisplay;