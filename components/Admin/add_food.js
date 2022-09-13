import { StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, { Component, useState } from 'react';
//import { Dropdown } from 'react-native-element-dropdown';
import { launchImageLibrary} from 'react-native-image-picker'
import { Avatar, Button } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
const foodType = [
    { label: 'Breakfast', value: 'breakfast' },
    { label: 'Lunch', value: 'lunch' },
    { label: 'Dinner', value: 'dinner' },
    { label: 'Beverage', value: 'beverage' }
];
const countries = ["Breakfast", "Lunch", "Dinner", "Beverage"]
class Add_Food extends Component {
    constructor() {
        super()
        let pic = '';
        this.state = {
            pic:'',
            name:'',
            price:0,
            ingredient:''
        }

    }
    render() {
        
       
        function uploadImage() {
            console.log(54)
            alert(54)
            launchImageLibrary({ noData: true }, (response) => {
                console.log(response);
                // if (response) {
                //   setPhoto(response);
                // }
              });
            /*  let options = {
                mediaType: 'photo',
                quality: 1,
                includeBase64: true
            }
            
           launchImageLibrary(options, response => {
                if (response.didCancel) {

                }
                console.log(response)
            }) */
        }
        function save() {
            alert(12)
        }
        return (
            <View>
                <View></View>
                <View>
                    <View style={styles.centerContent}>
                        <TouchableHighlight
                            onPress={() => alert('pressed')}
                            underlineColorAndroid="rgba(0,0,0,0)">
                            <Avatar.Image size={250}
                                source={{ uri: 'data:image/png;base64,' + this.state.pic }}
                            />
                        </TouchableHighlight>
                    </View>
                    <View >
                        <Button mode='container' onPress={() => uploadImage()}>
                            Upload Image
                        </Button>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.addLabel}>Food Type</Text>
                        <SelectDropdown style={styles.selectDropdown}
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.addLabel}>Price</Text>
                        <TextInput style={styles.controlForm} />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.addLabel}>Food/Beverage Name</Text>
                        <TextInput style={styles.controlForm} />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.addLabel}>Ingridient</Text>
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="bread, cheese, palony, etc"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <TouchableOpacity style={styles.addBtn} onPress={save}>
                            <Text style={styles.addLabelBtn}>Add Item On App</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    formGroup: {
        color: 'black',
        marginTop: 10
    },
    selectDropdown: {
        backgroundColor: 'grey',
        color: 'white'
    },
    addLabel: {
        marginLeft: 10,
        fontSize: 20,
    },
    controlForm: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        borderRadius: 8,
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        fontSize: 20,
        borderWidth: 1,
    },
    addBtn: {
        backgroundColor: 'pink',
        marginTop: 20,
        height: 50,
        borderRadius: 5,
    },
    addLabelBtn: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 20,
    },
})

export default Add_Food;