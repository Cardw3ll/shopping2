import { Image, StyleSheet, Text, Table, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function NavMenu() {
    const navigation = useNavigation();

    const nav = ">"
    const products = useSelector((state) => state.reaturentFood.products)
    function navMenu(data) {
        navigation.navigate('category_details', {data:data});

    }
    return (
        <View style={styles.container}>
     
            <View style={styles.line}></View>
            {products.map((product, xid) => (

                <TouchableOpacity key={xid} style={styles.formgroup} onPress={()=> navMenu(product)}>
                    <View style={styles.breakfast}><Text style={styles.x}>{product.category}</Text></View><View style={styles.forward1}><Text style={styles.forward1}>{nav}</Text></View>

                    <View style={styles.line2}></View>
                </TouchableOpacity>

            ))}


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: "#ffff",

    },
    title: {
        width: 70,
        left: 12,
        color: "#0000000",
        fontWeight: 300,
        top: 73,
        height: 19,
        fontFamily: 'inter',
        fontSize: 15,
        fontWeight: 700,
        fontStyle: 'normal'



    },
    images: {

        top: 87,
        flexDirection: "row",
        left: 800,
        fontWeight: 700,
        fontSize: 15,
        fontStyle: 'normal'


    },
    categories: {
        left: -55

    },
    line: {

        width: '90%',
        height: 1,
        border: 0.2,
        top: 25,
        left: 10,
        color: "#0000",
        backgroundColor: "black"


    },
    x: {
        fontWeight: 300,
        top: 53,
        height: 19,
        fontFamily: 'inter',
        fontSize: 15,
        fontWeight: 800,
        fontStyle: 'normal',
        left: 290
    },
    breakfast: {

        left: 1,
        top: 20,
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 16,
        lineHeight: 13,
        marginLeft:10

    },
    line2: {

        width: '90%',
        height: 1,
        border: 0.2,
        top: 25,
        left: 4,
        color: "#0000",
        backgroundColor: "black"


    },
    forward1: {

        fontFamily: 'Inter',
        fontSize: 30,
        fontWeight: 800,
        fontStyle: 'normal',
        lineHeight: 13,
        left: 260,
        height: 19,
    },
    lunch: {

        left: 1,
        top: 40,
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 16,
        lineHeight: 13

    },
    forward2: {

        fontFamily: 'Inter',
        fontSize: 30,
        fontWeight: 800,
        fontStyle: 'normal',
        lineHeight: 13,
        left: 260,
        top: 25,
        height: 19
    },
    line3: {

        width: 291,
        height: 1,
        border: 0.2,
        top: 35,
        left: 4,
        color: "#0000",
        backgroundColor: "black"



    },
    line4: {

        width: 291,
        height: 1,
        border: 0.2,
        top: 40,
        left: 4,
        color: "#0000",
        backgroundColor: "black"


    },
    Supper: {

        left: 1,
        top: 50,
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 16,
        lineHeight: 13

    },
    Beverage: {

        left: 1,
        top: 50,
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 16,
        lineHeight: 13

    },
    line5: {

        width: 291,
        height: 1,
        border: 0.2,
        top: 45,
        left: 4,
        color: "#0000",
        backgroundColor: "black"


    },
    formgroup: {
        marginTop: 20
    }
});
export default NavMenu;