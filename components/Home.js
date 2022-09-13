import { Image, Text, View, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import ResaurantItems from './ResaurantItems';
import Delivery from './Delivery';
import { useDispatch } from 'react-redux';
import { displayProduct } from './redux/restaurentGallery'


function Home() {
    // const data = [
    //     {
    //         id: 1, category: 'breakfast', gallery: [
    //             {
    //                 id: 1, image: require('../assets/breakfast/pexels-alexander-mils-2103949.jpg'), itemType: 'cereal', price: '75.00',
    //                 ingredient: 'granola, peach, plain yoghurt, cereal'
    //             },
    //             {
    //                 id: 2, image: require('../assets/breakfast/pexels-julian-jagtenberg-103124.jpg'), itemType: 'Pancake', price: '70.00',
    //                 ingredient: 'honey , strawberry, pancake'
    //             },
    //             {
    //                 id: 3, image: require('../assets/breakfast/pexels-pixabay-414555.jpg'), itemType: 'Cappuccino', price: '55.00',
    //                 ingredient: 'Milk, cappaccino, scones, cappuccino'
    //             },
    //         ]
    //     },
    //     {
    //         id: 2, category: 'Lunch', gallery: [
    //             {
    //                 id: 1, image: require('../assets/lunch/pexels-pixabay-461382.jpg'), itemType: 'Burger', price: '35.00',
    //                 ingredient: 'tomatoes, bread, cucumber, lettuce'
    //             },
    //             {
    //                 id: 2, image: require('../assets/lunch/pexels-robin-stickel-70497.jpg'), itemType: 'Burger', price: '70.00',
    //                 ingredient: 'chips, bread, burger, lettuce, creamy mayonnaise, jack cheese slice, gourmet patty'
    //             },
    //             {
    //                 id: 3, image: require('../assets/lunch/pexels-pixabay-315755.jpg'), itemType: 'Pizza', price: '60.00',
    //                 ingredient: 'chicken, cheese'
    //             },
    //         ]
    //     },
    //     {
    //         id: 3, category: 'Dinner', gallery: [
    //             {
    //                 id: 1, image: require('../assets/supper/OIP (19).jpg'), itemType: 'Pap', price: '40.00',
    //                 ingredient: 'pap, wors, chakalaka'
    //             },
    //             {
    //                 id: 2, image: require('../assets/supper/OIP (21).jpg'), itemType: 'Pap', price: '35.00',
    //                 ingredient: 'Pap and Steak'
    //             },
    //             {
    //                 id: 3, image: require('../assets/supper/R (3).jpg'), itemType: 'Pap', price: '34.00',
    //                 ingredient: 'Pap and tripe(mala mogodu)'
    //             },
    //         ]
    //     },
    //     {
    //         id: 4, category: 'Bevarage', gallery: [
    //             {
    //                 id: 1, image: require('../assets/bev/OIP (21).jpg'), itemType: 'Alcohol', price: '20.00',
    //                 ingredient: 'beer'
    //             },
    //             {
    //                 id: 2, image: require('../assets/bev/pexels-posawee-suwannaphati-391213.jpg'), itemType: 'Alcohol', price: '25.00',
    //                 ingredient: 'wine'
    //             },
    //             {
    //                 id: 3, image: require('../assets/bev/pexels-bruno-scramgnon-1337825.jpg'), itemType: 'Juice', price: '20.00',
    //                 ingredient: 'watermelon'
    //             },
    //         ]
    //     }
    
    // ]
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
    const dispatch = useDispatch();
    function initialsProduct(){
        dispatch(displayProduct(data))
    }
    initialsProduct()
    return (
        <View>
            <Header></Header>
            <Image source={require("../assets/images/Breward.jpg")} style={{ width: "100%", height: 180 }} />
            <NavBar />
            <ScrollView>
                <ResaurantItems />
            </ScrollView>
            <Delivery />
        </View>
    )
}


export default Home;