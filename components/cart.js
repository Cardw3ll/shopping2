import React, {useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert, 
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart } from './redux/restaurentGallery'
import { decrement, amountDecrement, increment, amountIncrement } from './redux/counter';

export default function Cart() {

    const dispatch = useDispatch();
    const coin = useSelector((state) => state.counter.coin)
    const total = useSelector((state) => state.counter.total)
    const cartItems = useSelector((state) => state.reaturentFood.cartItems)
    function removeItem(item) {
        dispatch(removeToCart(item))
        dispatch(decrement())
        dispatch(amountDecrement(item.price))
    }
    return (
        <View style={styles.container}>

            <StatusBar backgroundColor='#000000' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Total Price: {total}</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.text_header}>Total Items: {coin}</Text>
            </View>
            <View >
                {cartItems.map((item, xid) =>(
                    <TouchableOpacity key={xid}>
                        <Image source={item.image} style={[{height:100,width:'20%'} ]} />
                        <Text>{item.price}</Text>
                        <Text>{item.ingredient}</Text>
                        <Text>{item.itemType}</Text>
                        <Text onPress={() => removeItem(item)}>X</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.button}>
                <TouchableOpacity
                    style={[styles.checkOut, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 530
                    }]}
                >
                    <Text style={[styles.textCheckOut, {
                        color: '#009387',
                        fontWeight: 'bold',
                    }]}>Check Out</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#00000',
    //     fontWeight: 'bold',
    //     top: 40
    // },
    checkOut: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'black',

    }
});