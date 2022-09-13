import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


//
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

export default function ResaurantItems () {
    const products = useSelector((state) => state.reaturentFood.products)
    const navigation = useNavigation();
    const [LocalRestaurant]= useState(products)

    function specificCategory(items) {
        navigation.navigate('category_details', {data:items});
    }
        
        return (
            <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
                {LocalRestaurant.map((restuarant, index) =>(
                     <TouchableOpacity onPress={() => specificCategory(restuarant)} key={index} >
                        <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                           
                            <Image source={restuarant.gallery[1].image} style={[{height:100,width:'95%'} ]} />
                        </View>
                        <Text>View More</Text>
                    </TouchableOpacity>
        ))}
            </TouchableOpacity>
        )
}

const ResuatrantImage = (props) => {
    return (
        <>
            <Image source={{ uri: props.images }}
                style={{ width: "100%", height: 180 }} />

            <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
                <MaterialCommunityIcons name='heart-outline' size={24} color='white' />
            </TouchableOpacity>
        </>

    )


};

const ResaurantInfo = (props) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
                <Text style={{ fontSize: 13, color: "grey" }}>30-45  ~ min</Text>
            </View>


            <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 }}>
                <Text >{props.ratings}</Text>
            </View>

        </View>
    )
}