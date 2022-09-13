import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import FullDisplay from './components/FullDisplay'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          /*screenOptions={{
            headerShown: false
          }}*/>
          <Stack.Screen
            name="home"
            component={Home}
          />
          <Stack.Screen
            name="category_details"
            component={FullDisplay}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(218, 204, 195, 0.884)',
    height: '100vh',
  }
});
