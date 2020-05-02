import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const menu = <MaterialCommunityIcons name="menu" size={25} color="#fff" />;
const searchIcon = <MaterialIcons name="search" size={25} color="#fff" />
const shoppingBasketIcon = <Fontisto name="shopping-basket" size={20} color="#fff" />

import defaultScreenOptions from './defaultScreenOptions'

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: (props) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                }}>
                <Image
                  source={require('../assets/img/americana-logo.png')}
                />
              </View>
            );
          }
        }} />
      {/* <Stack.Screen name="HomeScreen" component={OTHER} />
            <Stack.Screen name="HomeScreen" component={OTHER} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;


