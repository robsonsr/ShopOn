import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const menu = <MaterialCommunityIcons name="menu" size={25} color="#fff" />;

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: '#F51E1E',
          // paddingHorizontal: 20
        },
        headerRight: () => {
          return (
            <View style={{ height: 20, width: 20 }}>

            </View>
          )
        },
        headerTitle: false,
        headerLeft: () => {
          return (
            <View style={{ paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                {menu}
              </TouchableOpacity>

              <Image source={require("../assets/img/americana-logo.png")} style={{ marginLeft: 20 }} />
            </View>
          )
        }
      }}

    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="HomeScreen" component={OTHER} />
            <Stack.Screen name="HomeScreen" component={OTHER} /> */}

    </Stack.Navigator>
  );
}

export default AppStack;
