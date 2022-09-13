import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Cart from './cart'
import NavMenu from './NavMenu';
import { useDispatch, useSelector } from 'react-redux';

//
    
function Header() {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         openMenu: false,
    //         openCart: false,
    //         openSearch: false,
    //         openUser: false
    //     }
    // }

    const [openMenu, setopenMenu] = useState(false);
    const [openCart, setopenCart] = useState(false);
    const [openSearch, setopenSearch] = useState(false);
    const [openUser, setopenUser] = useState(false);


   function menuOpen(){
        this.setState({ openMenu: true })
        console.log(this.state.openMenu)
    }
    
        const coin = useSelector((state) => state.counter.coin)

        return (
            <View style={styles.main}>
                <View style={styles.logo}>
                    <Text style={styles.logoText} >Shienly</Text>
                </View>
                <View style={styles.nav}>
                    <Image source={require('../assets/images/search.png')} style={styles.img} />
                    <Image source={require('../assets/images/circle-user-solid.svg')} style={styles.img} />
                    <TouchableOpacity onPress={() =>setopenCart(true)}><Image source={require('../assets/images/cart-shopping-solid.svg')} style={styles.img} />
                        {/* <Text>{coin}</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>setopenMenu(true)}><Image source={require('../assets/images/menu.png')} style={styles.img}  /></TouchableOpacity>
                </View>
                <Modal transparent={true} visible={openMenu}>
                    <View style={styles.modal}>
                        <Text>menu</Text>
                        <Text onPress={() =>setopenMenu(false)} style={styles.cancelModal}>X</Text>
                        <NavMenu />
                    </View>
                    
                </Modal>
                <Modal transparent={true} visible={openCart}>
                    <View style={[styles.modal, styles.menumodal]}>
                        <Text>cart</Text>
                        <Text onPress={() =>setopenCart(false)} style={styles.cancelModal}>X</Text>
                        <Cart />
                    </View>
                    
                </Modal>
            </View>
        )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 25,
        flexDirection: 'row',
        position: 'relative',

    },
    logo: {
        width: '75%',
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    nav: {
        flexDirection: 'row',
        marginTop: 5,
    },
    img: {
        width: 16,
        height: 17,
        marginRight: 5,
        marginLeft: 5,
    },
    profile: {
        flexDirection: 'row',
        
    },
    right: {
        flexDirection: 'row',
        position: 'absolute',
        right: '2%'
    },
    modal: {
        backgroundColor: 'grey',
        flex: 1
    },
    cancelModal: {
        textAlign: 'right',
        marginRight: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    menumodal:{
        marginTop: 25
    }
})

export default Header;