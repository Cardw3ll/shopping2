import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    ScrollView,
    Image
} from 'react-native';
import SearchBar from './SearchBar';

function Delivery() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='#000000' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Confirm your address</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.text_body}>Enter your address or select one below to customize your shopping experience. This way, you'll only see what's available in your area.</Text>
            </View>

            <SearchBar />
            <View style={styles.saved}>
                <Text style={styles.text_saved}>To see your saved addresses Sign In</Text>
            </View>



            <View style={styles.button}>
                <TouchableOpacity
                    style={[styles.checkOut, {
                        borderColor: 'black',
                        borderWidth: 1,
                        marginTop: 305
                    }]}
                >
                    <Text style={[styles.textCheckOut, {
                        color: 'black',
                        fontWeight: 'bold',
                    }]}>Confirm address</Text>

                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}

export default Delivery;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 50,
        marginLeft: 125,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',

    },
    text_header: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 80,
        justifyContent: 'center',
    },
    body: {
        marginBottom: -20,
        justifyContent: 'center',

    },
    text_body: {
        textAlign: 'center',
        marginBottom: -70,
    },
    saved: {
        marginBottom: -20,
        justifyContent: 'center',

    },
    text_saved: {
        textAlign: 'center',
        marginBottom: -200,

    },

    checkOut: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'lightgrey',

    },
    address: {
        marginTop: 150,
        backgroundColor: 'lightgrey',
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 10,
        height: 35
    },
    img: {
        height: 0
    }

});
