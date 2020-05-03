import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ProductDetails from '../screens/ProductDetails';

import defaultScreenOptions from './defaultScreenOptions';

const Stack = createStackNavigator();
const ProductDetailsStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: 'detalhes produto' }}
      />
    </Stack.Navigator>
  );
};

export default ProductDetailsStack;
