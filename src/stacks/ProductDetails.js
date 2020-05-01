import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ProductDetails from '../screens/ProductDetails';

const Stack = createStackNavigator();
const ProductDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      {/* <Stack.Screen name="QRcodeScreen" component={OTHERSCREEN} />
        <Stack.Screen name="QRcodeScreen" component={OTHERSCREN} /> */}
    </Stack.Navigator>
  );
};

export default ProductDetailsStack;
