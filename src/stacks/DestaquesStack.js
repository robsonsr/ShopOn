import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import DestaquesScreen from '../screens/DestaquesScreen';
import ModoLojaHomeScreen from '../screens/ModoLojaHomeScreen'

// TELAS DETALHES PRODUTOS
import ProductDetails from '../screens/ProductDetails'

// TELAS LISTA DE COMPRAS
import CarrinhoScreen from '../screens/CarrinhoScreen'
import ConsultaProdutoScreen from '../screens/ConsultaProdutoScreen'
import FinalizarCompraScreen from '../screens/FinalizarCompraScreen'
import AgendarRetiradaScreen from '../screens/AgendarRetiradaScreen'

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
        name="DestaquesScreen"
        component={DestaquesScreen}
        options={{
          headerLeft: (props) => {
            return (
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  {menu}
                </TouchableOpacity>
              </View>
            );
          },
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
      <Stack.Screen
        name="ModoLojaHomeScreen"
        component={ModoLojaHomeScreen}
        options={{
          headerTitle: "modo loja"
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerTitle: "consulta por QR Code"
        }} />
      <Stack.Screen
        name="CarrinhoScreen"
        component={CarrinhoScreen}
        options={{
          headerTitle: "carrinho",
          headerRight: false
        }} />
      <Stack.Screen
        name="ConsultaProdutoScreen"
        component={ConsultaProdutoScreen}
        options={{
          headerTitle: "produto",
          headerRight: false
        }} />
      <Stack.Screen
        name="FinalizarCompraScreen"
        component={FinalizarCompraScreen}
        options={{
          headerTitle: "finalizar compra",
          headerRight: false
        }} />
      <Stack.Screen
        name="AgendarRetiradaScreen"
        component={AgendarRetiradaScreen}
        options={{
          headerTitle: "agendar retirada",
          headerRight: false
        }} />
    </Stack.Navigator>
  );
};

export default AppStack;


